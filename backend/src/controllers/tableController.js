import Tables from "../models/tablemodel.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

const get_timetable = asyncHandler(async (req, res, next) => {
    const course_name = req.query.course;
    const semester = req.query.semester;
    const section = req.query.section;
    if (!course_name || !semester || !section) {
        throw new ApiError(400, "Missing one or more required parameters");
    }
    const timetable = await Tables.findOne({
        course: course_name,
        semester: semester,
        section: section,
    });

    if (!timetable) {
        throw new ApiError(404, "Timetable not found");
    }

    res.status(200).json(new ApiResponse(200, timetable));
});

const post_teachertable = asyncHandler(async (req, res, next) => {
    const course_name = req.body.course;
    const semester = req.body.semester;
    const section = req.body.section;
    const teacher_table = req.body.teacher_subject_data;

    const update_table = await Tables.findOneAndUpdate(
        {
            course: course_name,
            semester: semester,
            section: section,
        },
        {
            $set: {
                teacher_subject_data: teacher_table,
            },
        }
    );

    if (!update_table) {
        throw new ApiError(
            404,
            "no matching course, semester and section found"
        );
    }
    res.status(200).json(new ApiResponse(200, {}, "Teacher table updated"));
});

const save_timetable = asyncHandler(async (req, res, next) => {
    const course_name = req.body.course;
    const semester = req.body.semester;
    const section = req.body.section;
    const schedule = req.body.schedule;
    const teacher_table = req.body.teacher_subject_data;

    const section_data = await Tables.findOne({
        course: course_name,
        semester: semester,
        section: section,
    });
    if (section_data) {
        await Tables.findOneAndUpdate(
            {
                course: course_name,
                semester: semester,
                section: section,
            },
            {
                $set: {
                    schedule: schedule,
                    teacher_subject_data: teacher_table,
                },
            }
        );
        res.status(200).json(
            new ApiResponse(200, {}, "time table updated succefully")
        );
    } else {
        const new_section_data = await Tables.create({
            course: course_name,
            semester: semester,
            section: section,
            schedule: schedule,
            teacher_subject_data: teacher_table,
        });
        await new_section_data.save();
        res.status(201).json(
            new ApiResponse(
                201,
                {},
                "time table of new section created successfully"
            )
        );
    }
});

const save_generic_teachertable = asyncHandler(async (req, res, next) => {
    const course_name = req.body.course;
    const semester = req.body.semester;
    const teacher_table = req.body.teacher_subject_data;

    const all_updates = await Tables.updateMany(
        {
            course: course_name,
            semester: semester,
        },
        {
            $set: {
                teacher_subject_data: teacher_table,
            },
        }
    );

    if (all_updates.modifiedCount === 0) {
        throw new ApiError(
            404,
            {},
            "no table with matching course and semester found"
        );
    }
    res.status(200).json(
        new ApiResponse(
            200,
            {},
            `${all_updates.modifiedCount} table(s) updated successfully`
        )
    );
});

export {
    get_timetable,
    post_teachertable,
    save_timetable,
    save_generic_teachertable,
};
