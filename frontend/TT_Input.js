// Sample data for generating dropdowns will be fetched from apis and database
let faculty_data = [
    {
        "teacherid": "0",
        "name": "",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118501",
        "name": "Dr. Sanjay Jasola (VC)",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118502",
        "name": "Dr. R. Gowri",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118503",
        "name": "Dr. Mahantesh Pattanshetti",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118504",
        "name": "Dr. Ashok Kumar Sahoo",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118505",
        "name": "Dr. Vrince Vimal",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118506",
        "name": "Dr. Mahesh Manchanda",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118507",
        "name": "Dr. Prateek Srivastava",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118508",
        "name": "Mr. A. B. Desai",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118509",
        "name": "Dr. Gunjan Chhabra",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118510",
        "name": "Dr. Susheela Dahiya",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118511",
        "name": "Dr. Ajay Narayan Shukla",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118512",
        "name": "Dr. Amit Kumar Mishra",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118513",
        "name": "Mr. Piyush Bagla",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118514",
        "name": "Mr. B. P. Dubey",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118515",
        "name": "Dr. Vikrant Sharma",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118516",
        "name": "Mr. Avnish Panwar",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118517",
        "name": "Mr. Saumitra Chattopadhyay",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118518",
        "name": "Ms. Manika Manwal",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118519",
        "name": "Ms. Sonali Gupta",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118520",
        "name": "Dr. Rishika Yadav",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118521",
        "name": "Ms. Manisha Aeri",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118522",
        "name": "Mr. Sushant Chamoli",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118523",
        "name": "Mr. Samir Rana",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118524",
        "name": "Ms. Aditya Verma",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118525",
        "name": "Ms. Ayushi Jain",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118526",
        "name": "Ms. Preeti Chaudhary",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118527",
        "name": "Ms. Poonam Rani",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118528",
        "name": "Mr. Chandradeep Bhatt",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118529",
        "name": "Mr. Akash Chauhan",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118530",
        "name": "Ms. Lisa Gopal",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118531",
        "name": "Mr. Amit Gupta",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118532",
        "name": "Mr. Chetan Pandey",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118533",
        "name": "Mr. Abhishek Sharma",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118534",
        "name": "Mr. Sandeep Chand Kumain",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118535",
        "name": "Mr. Rahul Chauhan",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118536",
        "name": "Dr. Satvik Vats",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118537",
        "name": "Ms. Richa Gupta",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118538",
        "name": "Mr. Purushottam Das",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118539",
        "name": "Dr. Devesh Tiwari",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118540",
        "name": "Dr. Jyoti Joshi",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118541",
        "name": "Ms. Himadari Vaidya",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118542",
        "name": "Mr. Mukesh Kumar",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118543",
        "name": "Mr. Deepak Upadhyay",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118544",
        "name": "Ms. Preeti Badhani",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118545",
        "name": "Mr. Kapil Rajput",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118546",
        "name": "Ms. Shruti Bhatla",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118547",
        "name": "Mr. Animesh Srivastava",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118548",
        "name": "Ms. Pallavi Tiwari",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118549",
        "name": "Mr. Nitin Thapliyal",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118550",
        "name": "Ms. Sonal Malhotra",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118551",
        "name": "Ms. Shagun Singh Dasawat",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118552",
        "name": "Mr. Aditya Agnihotri",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118553",
        "name": "Mr. Saksham Mitta",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118554",
        "name": "Ms. Priyanshi Aggarwal",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118555",
        "name": "Mr. Amrish Sharma",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118556",
        "name": "Ms. Priyanka Nautiyal",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118557",
        "name": "Dr. Jyoti Kandpal",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118558",
        "name": "Dr. Jyoti Ramola",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118559",
        "name": "Mr. Divesh Kumar",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118560",
        "name": "Dr. Saurabh Agarwal",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118561",
        "name": "Dr. Vivek Chamoli",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118562",
        "name": "Dr. Arun Pratap Singh Rathod",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118563",
        "name": "Mr. Vineet Singh Deopa",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118564",
        "name": "Dr. Mohit Payal",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118565",
        "name": "Ms. Deeksha Naithani",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118566",
        "name": "Ms. Ishita Uniyal",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118567",
        "name": "Ms. Anshu Sharma",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118568",
        "name": "Mr. Saurabh Fulara",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118569",
        "name": "Dr. Ankit Tomar",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118570",
        "name": "Dr. Devesh P Singh",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118571",
        "name": "Mr. P.A Ananad",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118572",
        "name": "Mr. Ashish Garg",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    },
    {
        "teacherid": "2118573",
        "name": "Ms. Neelam Kathait",
        "schedule": {
            "mon": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "tue": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "wed": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "thu": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "fri": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sat": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            },
            "sun": {
                "08-09": {
                    "course": "",
                    "subjectcode": ""
                },
                "09-10": {
                    "course": "",
                    "subjectcode": ""
                },
                "10-11": {
                    "course": "",
                    "subjectcode": ""
                },
                "11-12": {
                    "course": "",
                    "subjectcode": ""
                },
                "12-01": {
                    "course": "",
                    "subjectcode": ""
                },
                "01-02": {
                    "course": "",
                    "subjectcode": ""
                },
                "02-03": {
                    "course": "",
                    "subjectcode": ""
                },
                "03-04": {
                    "course": "",
                    "subjectcode": ""
                },
                "04-05": {
                    "course": "",
                    "subjectcode": ""
                },
                "05-06": {
                    "course": "",
                    "subjectcode": ""
                }
            }
        }
    }
];
let subjectdata;
let room_list;
let timetable;
let messageCounter = 0;
//  the function below creates a floating card with the success and warning message and then removes it after 5 seconds
const float_error_card_func = (title, desc, color) => {
	const uniqueId = `float_error_card_${messageCounter++}`;

	let div = document.createElement('div');
	div.className = `card text-bg-${color} position-fixed bottom-0 end-0 m-3`;
	div.style.maxWidth = "25rem";
	div.id = uniqueId;

	let headerDiv = document.createElement('div');
	headerDiv.className = "card-header fw-bold";
	div.appendChild(headerDiv);

	let bodyDiv = document.createElement('div');
	bodyDiv.className = "card-body";

	let h5 = document.createElement('h5');
	h5.className = "card-title";
	h5.textContent = title;
	bodyDiv.appendChild(h5);

	let p = document.createElement('p');
	p.className = "card-text";
	p.textContent = desc;
	bodyDiv.appendChild(p);

	div.appendChild(bodyDiv);
	document.getElementById('message_container').appendChild(div);

	if (color === "success") {
		headerDiv.innerHTML = `Success <i class="bi bi-check-circle-fill"></i>`;
	} else if (color === "danger") {
		headerDiv.innerHTML = `Warning <i class="bi bi-exclamation-triangle-fill"></i>`;
	}else if (color === "warning") {
        headerDiv.innerHTML = `Warning <i class="bi bi-exclamation-octagon-fill"></i>`;
    }
	div.classList.add('rise');
	setTimeout(() => {
		div.classList.remove('rise');
		div.classList.add('sink');
		setTimeout(() => {
			div.remove();
		}, 1000);
	}, 5000);
}
//  the function below updates the teacher subject table acc to the subject choosen 
const update_detail_table = () => {
	let tempteachersubjectdata = [];
	let tableBody = document.getElementById("teacher_table").getElementsByTagName('tbody')[0];
	// Iterate over each row in the table body
	for (let i = 0; i < tableBody.rows.length; i++) {
		let row = tableBody.rows[i];

		let subjectname = row.cells[0].firstChild.innerHTML;
		let teacherid = row.cells[1].firstChild.value;
		let subjectid = row.cells[2].firstChild.innerHTML;
		let teachername = row.cells[1].firstChild.options[row.cells[1].firstChild.selectedIndex].text;
		let weekly_hrs = row.cells[3].firstChild.innerHTML;
		let theory_practical = row.cells[4].firstChild.innerHTML;
	

		let rowData = {
			"subjectcode": subjectid,
			"teacherid": teacherid,
			"weekly_hrs": weekly_hrs,
			"teachername": teachername,
			"subjectname": subjectname,
			"theory_practical": theory_practical,
		}
		tempteachersubjectdata.push(rowData);
	}
	let testinglist = [];
	tempteachersubjectdata.forEach(element => {
		testinglist.push({
			"subjectcode": element.subjectcode,
			"subjectname": element.subjectname,
			"weekly_hrs": element.weekly_hrs,
			"theory_practical": element.theory_practical
		});
	});
	add_subjects_options_to_mytable(testinglist);
	// any_change_event_listner();
}

//  this function creates and delete a row of table for teacher-subject table dynamically 
//  and add the options to the subjects and faculty data 
// then calls the update detail table function
const add_row_func = () => {
	let table = document.getElementById("teacher_table").getElementsByTagName('tbody')[0];
	let newRow = table.insertRow(table.rows.length);

	// Subject name drop-down
	let cell = newRow.insertCell();
	let select = document.createElement("select");
	select.className = "form-select text";
	for (let ele in subjectdata) {
		let option = document.createElement("option");
		option.value = subjectdata[ele].subjectcode;
		option.text = subjectdata[ele].subjectname;
		select.appendChild(option);
	}
	cell.appendChild(select);

	// Teacher name drop-down
	cell = newRow.insertCell();
	select = document.createElement("select");
	select.className = "form-select text";
	for (let code in faculty_data) {
		let option = document.createElement("option");
		option.value = code;
		option.text = faculty_data[code].name;
		select.appendChild(option);
	}
	cell.appendChild(select);

	// Empty span tags for cells
	for (let i = 2; i < 5; i++) {
		let cell = newRow.insertCell();
		let span = document.createElement("span");
		span.className = "text";
		cell.appendChild(span);
	}
	update_detail_table();
};
const delete_row_func = () => {
	let table = document.getElementById("teacher_table").getElementsByTagName('tbody')[0];
	let rowCount = table.rows.length;
	table.deleteRow(rowCount - 1);
}

// add eventlistner to all the select box that updates the rows and data on content change in all selectboxs
const any_change_event_listner = () => {
	let selectors = document.getElementsByClassName("form-select");
	for (let i = 0; i < selectors.length; i++) {
		selectors[i].addEventListener("change", ()=>{
			update_detail_table()
		});
	}
}

//  this function removes all the classes and decrease the counter(section.length) from the timetable data saved during initialization    
const fixtime_firstphase = ()=>{
	// console.log(':::::  FIRST PHASE start  :::::');
	// console.log(room_list);
	let prev = room_list;
	let mytable = document.getElementById("mytable");
	for(let i=1;i<=7;i++){
		let currday = mytable.rows[i].cells[0].innerHTML.toLowerCase();
		for(let j=1;j<=10;j++){
			let currslot = mytable.rows[0].cells[j].innerHTML.toLowerCase();
			if(timetable){
				let temp = timetable.schedule[currday][currslot].class_id;
				if (temp in room_list) {
					if(room_list[temp].schedule[currday][currslot].section.length > 0 && temp != '0'){
						if(room_list[temp].schedule[currday][currslot].section.length == 1){
							room_list[temp].schedule[currday][currslot].section.length -= 1;
							room_list[temp].schedule[currday][currslot].teacherid = "";
							room_list[temp].schedule[currday][currslot].subjectcode = "";
						}
						else if(room_list[temp].schedule[currday][currslot].section.length > 1){
							room_list[temp].schedule[currday][currslot].section.length -= 1;
						}
					}
				}
			}
		}
	}
}
//  this function adds all the current selected classes ( mytable ) and increase the counter(section.length)  
const fixtime_secondphase = ()=>{
	let mytable = document.getElementById("mytable");
	for(let i=1;i<=7;i++){
		let currday = mytable.rows[i].cells[0].innerHTML.toLowerCase();
		for(let j=1;j<=10;j++){
			let currslot = mytable.rows[0].cells[j].innerHTML.toLowerCase();
			let curr_slot_room = mytable.rows[i].cells[j].childNodes[1].value;
			if (curr_slot_room in room_list) {
				if(curr_slot_room != '0'){
					if(room_list[curr_slot_room].schedule[currday][currslot].section.length == 0){
						room_list[curr_slot_room].schedule[currday][currslot].section.length += 1;
						room_list[curr_slot_room].schedule[currday][currslot].teacherid = timetable.teacher_subject_data.find(x => x.subjectcode === mytable.rows[i].cells[j].childNodes[0].value)?.teacherid;
						room_list[curr_slot_room].schedule[currday][currslot].subjectcode = mytable.rows[i].cells[j].childNodes[0].value;
					}
					else if(room_list[curr_slot_room].schedule[currday][currslot].section.length > 0){
						room_list[curr_slot_room].schedule[currday][currslot].section.length += 1;
					}
				}
            }
		}
	}
	// console.log(room_list);
	console.log(':::::  SECOND PHASE DONE  :::::');
} 

const validateTeacherSubject = () => {
    let mytable = document.getElementById("mytable");
    for (let i = 1; i <= 7; i++) {
        let currday = mytable.rows[i].cells[0].innerHTML.toLowerCase();
        for (let j = 1; j <= 10; j++) {
            let currslot = mytable.rows[0].cells[j].innerHTML.toLowerCase();
            let curr_slot_room = mytable.rows[i].cells[j].childNodes[1].value;

            if (curr_slot_room in room_list && curr_slot_room !== '0') {
                if (room_list[curr_slot_room].schedule[currday][currslot].section.length > 0) {
                    if (room_list[curr_slot_room].schedule[currday][currslot].subjectcode !== mytable.rows[i].cells[j].childNodes[0].value) {
                        // Subject mismatch error
                        float_error_card_func(`Subject Conflict at ${currday.toUpperCase()} ${currslot} slot`, `Another class is alloted ${room_list[curr_slot_room].schedule[currday][currslot].subjectcode} as subject in this slot already`, "danger");
                        return;
                    } else if (room_list[curr_slot_room].schedule[currday][currslot].teacherid !== timetable.teacher_subject_data.find(x => x.subjectcode === mytable.rows[i].cells[j].childNodes[0].value)?.teacherid) {
                        // Teacher mismatch error
						float_error_card_func(`Teacher Conflict at ${currday.toUpperCase()} ${currslot} slot`, `${faculty_data[room_list[curr_slot_room].schedule[currday][currslot].teacherid].name}[ ${room_list[curr_slot_room].schedule[currday][currslot].teacherid} ] is teaching ${room_list[curr_slot_room].schedule[currday][currslot].subjectcode} in this slot. [ change your teacher or choose another class ]`, "danger");
                        return;
                    }
					else{
                        // float_error_card_func(`Validation Passed at ${currday.toUpperCase()} ${currslot} slot`, `Validation Passed for ${room_list[curr_slot_room].schedule[currday][currslot].subjectcode} subject in this slot`, "success");
					}
                }
				else{
                    // float_error_card_func(`Validation Passed at ${currday.toUpperCase()} ${currslot} slot`, `room is empty`, "success");
				}
            }
            faculty_data.forEach(element => {
                if (element.schedule[currday][currslot].teacherid !== "0") {
                    if(element.teacherid === timetable.teacher_subject_data.find(x => x.subjectcode === mytable.rows[i].cells[j].childNodes[0].value)?.teacherid ){
                        if(element.schedule[currday][currslot].subjectcode == mytable.rows[i].cells[j].childNodes[0].value){
                            float_error_card_func(`same subject hai`, `shayad merge hai class`, "warning");
                            return;
                        }
                        else if(element.schedule[currday][currslot].subjectcode !== mytable.rows[i].cells[j].childNodes[0].value){
                            float_error_card_func(`Teacher Conflict at ${currday.toUpperCase()} ${currslot} slot`, `${element.name}[ ${element.teacherid} ] is teaching ${element.schedule[currday][currslot].subjectcode} in this slot. [ change your teacher or choose another class ]`, "danger");
                            return;
                        }
                        // float_error_card_func(`Subject Conflict at ${currday.toUpperCase()} ${currslot} slot`, `Another class is alloted ${element.schedule[currday][currslot].subjectcode} as subject in this slot already`, "dark");
                    }
                }
            });
        }
    }
}

//  function below calculate and construct the main timetable table && teacher subject relation table json 
// and send that to the backend via post request 
const save_table_func = () => {
	let tempteachersubjectdata = [];

	let scheduleslot = {}
	for (let i = 1; i <=7; i++) {
		let currrow = mytable.rows[i].cells[0].innerHTML.toLowerCase();
		let tempdayslot = {}
		for (let j = 1; j <= 10; j++) {
			let currcol = mytable.rows[0].cells[j].innerHTML.toLowerCase();
			let sl_class_id = mytable.rows[i].cells[j].childNodes[1].value;
			let sl_subjectcode = mytable.rows[i].cells[j].childNodes[0].value;
			let sl_slotdata = "";
			if (sl_class_id != '0' || sl_subjectcode != '') {
				let curr_box = mytable.rows[i].cells[j].childNodes[1];
				sl_slotdata = `${sl_subjectcode}\n${curr_box.options[curr_box.selectedIndex].textContent}`;
			}
			else {
				sl_slotdata = "";
			}

			tempdayslot[currcol] = {
				"class_id": sl_class_id,
				"subjectcode": sl_subjectcode,
				"slotdata": sl_slotdata
			}
		}
		scheduleslot[currrow] = tempdayslot;
	}


	let tableBody = document.getElementById("teacher_table").getElementsByTagName('tbody')[0];
	// Iterate over each row in the table body
	for (let i = 0; i < tableBody.rows.length; i++) {
		document.getElementById("save_tt_json").disabled = true;
		let row = tableBody.rows[i];

		let subjectname = row.cells[0].firstChild.innerHTML;
		let teacherid = row.cells[1].firstChild.value;
		let subjectid = row.cells[2].firstChild.innerHTML;
		let weekly_hrs = row.cells[3].firstChild.innerHTML;
		let theory_practical = row.cells[4].firstChild.innerHTML;
		let teachername = faculty_data[teacherid].name;
	

		let rowData = {
			"subjectcode": subjectid,
			"teacherid": teacherid,
			"weekly_hrs": weekly_hrs,
			"teachername": teachername,
			"subjectname": subjectname,
			"theory_practical": theory_practical,
		}
		tempteachersubjectdata.push(rowData);
	}

	let jsonData = {
		"course": document.getElementById("course_option").value,
		"semester": document.getElementById("semester_option").value,
		"section": document.getElementById("section_option").value,
		"schedule": scheduleslot,
		"teacher_subject_data": tempteachersubjectdata,
	};

	console.log(JSON.stringify(jsonData, null, 2));
	// jsonData ka post request marna hai for teacher subject data  


	// Convert JSON data to a string
	const jsonDataString = JSON.stringify(jsonData, null, 4);

	// Create a POST request
	fetch('http://127.0.0.1:3000/table/save-timetable', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: jsonDataString
	})
		.then(response => {
			if (response.ok) {
				float_error_card_func("Timetable Saved Successfully", "Timetable saved to database successfully.", "success");
				return response.json();
			} else {
				float_error_card_func("Timetable not Saved", "Timetable data not saved due to network error.", "danger");
				throw new Error(':::::  DATA NOT SAVED DUE TO NETWORK ERROR :::::');
			}
		})
		.then(()=>{
			fixtime_firstphase();
		})
		.then(()=>{
			fixtime_secondphase();
		})
		.then(()=>{
			return fetch('http://127.0.0.1:3000/list/save-list', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					"type": "rooms",
					"data": room_list
				})
			})
			.then(response => {
				if (response.ok) {
					float_error_card_func("Room Data Saved Successfully", "Room data saved to database successfully.", "success");
					return response.json();
				} else {
					float_error_card_func("Room Data not Saved", "Room data not saved due to network error.", "danger");
					throw new Error(':::::  DATA NOT SAVED DUE TO NETWORK ERROR :::::');
				}
			});
		})
		.then(()=>{
			setTimeout(initializePage, 1000);
		})
		.catch(error => {
			float_error_card_func("Timetable not Saved", "Error saving timetable data.", "danger");
			console.error('::::: ERROR SAVING DATA :::::', error);
		});
}

//  this function below adds the select option field to each table cell in the table  and also give them appropriate classes 
// 	for additional essential funcitonality such as selecting all select box to add options dynamically to them 
const add_select_box_to_mytable = () => {
	let mytable = document.getElementById("mytable");
	for (let i = 1; i < mytable.rows.length; i++) {
		for (let j = 1; j < mytable.rows[1].cells.length; j++) {
			let tempcell = mytable.rows[i].cells[j];
			let select = document.createElement('select');
			select.setAttribute('class', 'form-select form-select text subjectselectbox fw-bold');
			select.setAttribute('style', 'white-space: pre-wrap;');
			tempcell.appendChild(select);
			let select2 = document.createElement('select');
			select2.setAttribute('class', 'form-select form-select text roomselectbox');
			select2.setAttribute('style', 'white-space: pre-wrap;');
			tempcell.appendChild(select2);
		}
	}
}

//  these two function below adds the options to the previously created select option field to each table cell in the table 
// 	this add options to subject select box and room select box in the main table dynamically with the data obtained from mongoDB
const add_rooms_options_to_mytable = (room_list) => {
	for (let i = 1; i <= 7; i++) {
		let currday = mytable.rows[i].cells[0].innerHTML.toLowerCase();
		for (let j = 1; j <= 10; j++) {
			let currslot = mytable.rows[0].cells[j].innerHTML.toLowerCase();
			let currslotroom = mytable.rows[i].cells[j].childNodes[1];
			let tempselectedvalue = currslotroom.value;
			currslotroom.innerHTML = "";
			Object.entries(room_list).forEach(([key, value]) => {
				let option = document.createElement("option");
				option.value = key;
				option.text = value.classname;
				option.setAttribute("class","text");
				// console.log(room_list);
				if(room_list[key].schedule[currday][currslot].section.length == 1){
					option.setAttribute("class","bg-success text-light bg-gradient text fw-bold");
				}
				else if(room_list[key].schedule[currday][currslot].section.length == 2){
					option.setAttribute("class","bg-primary text-light bg-gradient text fw-bold");
				}
				else if(room_list[key].schedule[currday][currslot].section.length == 3){
					option.setAttribute("class","bg-warning text-dark bg-gradient text fw-bold");
				}
				else if(room_list[key].schedule[currday][currslot].section.length == 4){
					option.setAttribute("class","bg-danger text-light bg-gradient text fw-bold");
				}
				else if(room_list[key].schedule[currday][currslot].section.length > 4){
					option.setAttribute("class","bg-dark text-light bg-gradient text fw-bold");
				}
				// console.log(option.value, option.text)
				if (key == tempselectedvalue) {
					option.selected = true;
				}
				currslotroom.appendChild(option);
			});
		}
	}
};
const add_subjects_options_to_mytable = (subject_list) => {
	let subjectselectbox = document.querySelectorAll(".subjectselectbox");
	subjectselectbox.forEach(select => {
		let tempselectedvalue = select.value;
		select.innerHTML = "";

		// adidng blank option 
		let option = document.createElement("option");
		option.value = "";
		option.text = "";
		if (option.value == tempselectedvalue) {
			option.selected = true;
		}
		select.appendChild(option);
		//
		subject_list.forEach(element => {
			option = document.createElement("option");
			option.value = element.subjectcode;
			option.text = element.subjectcode
			if (element.subjectcode == tempselectedvalue) {
				option.selected = true;
			}
			select.appendChild(option);
		});
	});
};

//  this function fetches the room list data form the server [ database ] and store the variable to the local variable for future use  
const fetch_room_list = () => {
	return fetch('http://127.0.0.1:3000/list/get-list?type=rooms',{
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then(response => response.json())
		.then(data => {
			room_list=data.data.data;
			console.log(room_list)
			add_rooms_options_to_mytable(room_list);
		})
		.catch(error => console.error('Room Data not available [ SERVER ERROR ] :::: ', error));
};
//  this function fetches the faculty list data form the server [ database ] and store the variable to the local variable for future use  
const fetch_faculties_list = () => {
	return fetch('http://127.0.0.1:3000/list/get-list?type=faculties',{
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then(response => response.json())
		.then(data => {
			data = data.data.data;
			faculty_data = data;
			console.log(data)
		})
		.catch(error => console.error('Faculty Data not available [ SERVER ERROR ] :::: ', error));
};

// renders the timetable on the main table [ uses the same strucute of JSON as it POST to the backend]
const render_tables = () => {
	// rendering the second table first
	if(timetable){
		float_error_card_func("Time Table Data available", "Time Table Data retrived from the DataBase and Rendered Successfully.", "success");
		let localteacher_subject_data = timetable.teacher_subject_data;
		let table = document.getElementById("teacher_table").getElementsByTagName('tbody')[0];
		table.innerHTML = "";
		for (let i = 0; i < localteacher_subject_data.length; i++) {
			const element = localteacher_subject_data[i];

			let table = document.getElementById("teacher_table").getElementsByTagName('tbody')[0];
			let newRow = table.insertRow(table.rows.length);

			// subject select box render
			let cell = newRow.insertCell();

			let cell_insert = document.createElement("span");
			cell_insert.setAttribute("class", "text");
			cell_insert.innerHTML = localteacher_subject_data[i].subjectname;
			cell.appendChild(cell_insert);
			cell.setAttribute("class", "border-dark border-3");

			// teacher select box render
			cell = newRow.insertCell();
			select = document.createElement('select');
			select.setAttribute('class', 'form-select text');
			cell.appendChild(select);
			for (let ele in faculty_data) {
				let option = document.createElement('option');
				option.value = faculty_data[ele].teacherid;
				option.text = faculty_data[ele].name;
				if (faculty_data[ele].teacherid == localteacher_subject_data[i].teacherid) {
					option.selected = true;
					// console.log(ele)
				}
				select.appendChild(option);
			}
			cell.setAttribute("class", "border-dark border-3 p-0");

			cell = newRow.insertCell();
			cell_insert = document.createElement("span");
			cell_insert.innerHTML = localteacher_subject_data[i].subjectcode;
			cell_insert.setAttribute("class", "text");
			cell.appendChild(cell_insert);
			cell.setAttribute("class", "border-dark border-3 fw-bolder");

			cell = newRow.insertCell();
			cell_insert = document.createElement("span");
			cell_insert.innerHTML = localteacher_subject_data[i].weekly_hrs;
			cell_insert.setAttribute("class", "text");
			cell.appendChild(cell_insert);
			cell.setAttribute("class", "border-dark border-3");

			cell = newRow.insertCell();
			cell_insert = document.createElement("span");
			cell_insert.innerHTML = localteacher_subject_data[i].theory_practical.charAt(0).toUpperCase() + localteacher_subject_data[i].theory_practical.slice(1);
			cell_insert.setAttribute("class", "text");
			cell.appendChild(cell_insert);
			cell.setAttribute("class", "border-dark border-3");

			cell = newRow.insertCell();
			cell_insert = document.createElement("span");
			cell_insert.innerHTML = 0;
			cell_insert.setAttribute("class", "text");
			cell.appendChild(cell_insert);
			cell.setAttribute("class", "border-dark border-3");
		}
		update_detail_table();
		add_subjects_options_to_mytable(localteacher_subject_data)

		// rendering the first main table now 
		let local_time_table_data = timetable.schedule;
		let mytable = document.getElementById("mytable");

		for (let i = 1; i < mytable.rows.length; i++) {
			let curr_day = mytable.rows[i].cells[0].innerHTML.toLowerCase();
			let curr_whole_row = mytable.rows[i];

			for (let j = 1; j <= 10; j++) {
				let curr_timeslot = mytable.rows[0].cells[j].innerHTML.toLowerCase();
				let curr_col_slot = curr_whole_row.cells[j];
				let curr_col_slot_childs = curr_col_slot.childNodes;

				// trying for subjects
				for (let i = 0; i < curr_col_slot_childs[0].options.length; i++) {
					let subject_options = curr_col_slot_childs[0].options;
					let optionValue = subject_options[i].value;
					if (optionValue == local_time_table_data[curr_day][curr_timeslot].subjectcode) {
						// console.log(optionValue);
						// console.log(local_time_table_data[curr_day][curr_timeslot].subjectcode);
						subject_options[i].selected = true;
					}
				}

				// trying for rooms
				for (let i = 0; i < curr_col_slot_childs[1].options.length; i++) {
					let room_options = curr_col_slot_childs[1].options;
					optionValue = room_options[i].value;
					if (optionValue == local_time_table_data[curr_day][curr_timeslot].class_id) {
						// console.log(optionValue);
						// console.log(local_time_table_data[curr_day][curr_timeslot].class_id);
						room_options[i].selected = true;
					}
				}
			}
		}
	}
	else{
		reset_table();
		float_error_card_func("Time Table Data not available", "Time Table Data not available. Please create a new Time Table.", "danger");
	}
}
const fetch_timetable =  () => {
	let course = document.getElementById("course_option").value;
	let semester = document.getElementById("semester_option").value;
	let section = document.getElementById("section_option").value;

	fetch('http://127.0.0.1:3000/table/get-timetable?' + new URLSearchParams({ course: course, semester: semester, section: section }), {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then(response => response.json())
		.then(data => {
			timetable = data.data;        // Do something with the response data here 
			console.log(timetable);
		})
		.then(() => {
			render_tables();
		})
		.then(() => {
			document.getElementById("save_tt_json").disabled=false;
		})
		.catch(error => {
			float_error_card_func("Time Table Data not available", "Time Table Data not available. Please create a new Time Table.", "danger");
			console.error('Data unavailable:', error)
		});
}

//  this function initializes the page by fetching the room list, faculty list and timetable data from the server
const initializePage = () => {
    fetch_room_list()
    // .then(() => fetch_faculties_list())
    .then(() => fetch_timetable())
    .then(() => {
		document.getElementById("save_tt_json").disabled = false;
		float_error_card_func("Initialization Successful", "Initialization was completed successfully and all the data was loaded.", "success");
    })
    .catch(error => {
		float_error_card_func("Error during initialization", "Error during initialization.", "danger");
		console.error('Error during initialization:', error)
	});
};
const reset_table = () => {
	let mytable = document.getElementById("mytable");
	for (let i = 1; i <= 7; i++) {
		for (let j = 1; j <= 10; j++) {
			mytable.rows[i].cells[j].childNodes[0].selectedIndex = 0;
			mytable.rows[i].cells[j].childNodes[1].selectedIndex = 0;
		}
	}
}

add_select_box_to_mytable();    // add subject and room select boxes to all the table cells  
//  adding event listners to the buttons and select boxes
document.getElementById("save_tt_json").addEventListener("click", save_table_func); 	// [ save TT JSON on DB button eventlistner ]
document.getElementById("reset_tt").addEventListener("click",reset_table);
document.getElementById('course_option').addEventListener('change', fetch_timetable);  	// [ course select box eventlistner ]
document.getElementById('semester_option').addEventListener('change', fetch_timetable); // [ semester select box eventlistner ]
document.getElementById('section_option').addEventListener('change', fetch_timetable);	// [ section select box eventlistner ]
document.getElementById("mytable").addEventListener("change",validateTeacherSubject);
document.addEventListener('DOMContentLoaded', initializePage);

// setInterval(() => {
// 	validateTeacherSubject();
// }, 2000);