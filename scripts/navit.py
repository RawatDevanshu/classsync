from bs4 import BeautifulSoup

html_code = """
<optgroup label="Ground floor (checking pending)"> 
                            <option value="1">Ubuntu lab 1</option>
                            <option value="3">Ubuntu lab 2 </option>
                            <option value="33">Bosch Lab</option>
                            <option value="6">Mac lab</option>
                            <option value="15">Reception</option>
                            <option value="25">Main Office</option>
                            <option value="29">medical Room(check)</option>
                            <option value="31">Seminar Hall</option>
                            <option value="36">CR101</option>
                            <option value="41">meeting hall</option>
                            <option value="54">Open Auditorium</option>
                            <option value="57">Staff room G1</option>
                            <option value="56">Staff room G2</option>
                            <option value="69">Lab 1</option>
                            <option value="101">Lab 9</option>
                            <!-- <option value="83">Gents Washroom</option> -->
                            <option value="73">Teacher office(Teacher name)</option>
                            <option value="75">CR102</option>
                            <option value="71">CR103</option>
                            <option value="85">CR104</option>
                            <option value="87">CR105</option>
                            <option value="89">CR106</option>
                            <option value="91">HOD office</option>
                            <option value="6191">workshop</option>
                            <option value="148">Gate no 1</option>
                            <option value="127">Gate no 2</option>
                            <option value="165">Gate no 3</option>
			                <option value="166">Canteen</option>
                            <option value="171">GEHU bus stop</option>
                    <!-- <option value="99">Ladies Washroom</option> -->
                    </optgroup>
                    <optgroup label="1st floor">
                            <option value="1119">Main Library</option>
                            <option value="1001">Round Room R</option>
                            <option value="1003">Round Room L</option>
                            <option value="1006">Dr Sanjay Jasola(vice chancellor)</option>
                            <option value="1122">CR209</option>
                            <option value="1017">CR211</option>
                            <option value="1025">Dr Kamal Ghanshala(President)</option>
                            <!-- <option value="1028">Ladies Washroom</option> -->
                            <option value="1031">LT202</option>
                            <option value="1033">CR206</option>
                            <option value="1036">CR207</option>
                            <option value="1041">LT201</option>
                            <!-- <option value="1051">Gents Washroom</option> -->
                            <option value="1052">Teacher office</option>
                            <option value="1057">Server Room</option>
                            <option value="1056">Staff room 21</option>
                            <option value="1069">Lab 2</option>
                            <option value="1101">Lab 8</option>
                            <!-- <option value="1083">Gents Washroom</option> -->
                            <option value="1073">Faculty of School of Pharmacy</option>
                            <option value="1075">CR201</option>
                            <option value="1071">CR202</option>
                            <option value="1085">CR203</option>
                            <option value="1087">CR204</option>
                            <option value="1089">CR205</option>
                            <option value="1091">Erp Cell</option>
                            <option value="1127">Gate no 3 ke upar</option>
                            <!-- <option value="1099">Ladies Washroom</option>    -->
                    </optgroup>
                    <optgroup label="2nd floor">
                            <option value="2119">Department of Fine Arts</option>
                            <option value="2001">Department of visual Art</option>
                            <option value="2006">CR304</option>
                            <option value="2017">CR302</option>
                            <option value="2122">New Hall</option>
                            <option value="2025">CR303</option>
                            <option value="2031">LT302</option>
                            <option value="2033">CR301</option>
                            <option value="2036">CR305</option>
                            <option value="2041">LT301</option>
                            <option value="2052">Dr Mahesh Manchanda</option>
                            <option value="2057">Staff room 31</option>
                            <option value="2056">Staff room 32</option>
                            <option value="2069">Lab 3</option>
                            <option value="2101">Lab 7</option>
                            <option value="2073">Teacher office</option>
                            <option value="2075">Pharmaceutical Analysis Lab</option>
                            <option value="2071">Pharmaceutical chemistry I Lab</option>
                            <option value="2085">Pharmaceutics I Lab</option>
                            <option value="2087">Pharmaceutics I Lab</option>
                            <option value="2089">Pharmacognosy I Lab</option>
                            <!-- <option value="2091">2nd HOD office</option> -->
                    </optgroup>
                    <optgroup label="3rd floor">
                            <option value="3002">Department of english</option>
                            <option value="3006">CR405</option>
                            <option value="3025">CR404</option>
                            <option value="3033">CR403</option>
                            <option value="3036">CR406</option>
                            <option value="3031">LT401</option>
                            <option value="3041">LT402</option>
                            <!-- <option value="3052">Teacher office</option> -->
                            <option value="3122">Conference Hall</option>
                            <option value="3057">Staff room 41</option>
                            <option value="3056">Staff room 42</option>
                            <option value="3119">Staff room 43(CSE RR)</option>
                            <option value="3069">Lab 4</option>
                            <option value="3101">IOT Lab</option>
                            <option value="3073">Department of Mathematics</option>
                            <option value="3075">CR401</option>
                            <option value="3071">Electronic engg Lab I</option>
                            <option value="3085">Logic Design Microprocessor Lab</option>
                            <option value="3087">Electronic engg Lab II</option>
                            <option value="3089">CR402</option>
                            <option value="3091">Dean Acadamics</option>
                    </optgroup>
                    <optgroup label="4th floor">
                            <option value="4052">Teacher office</option>
                            <option value="4006">Fashion class I</option>
                            <option value="4025">Fashion class II</option>
                            <option value="4017">Fashion Studio</option>
                            <option value="4031">LT501</option>
                            <option value="4041">LT502</option>
                            <option value="4033">CR503</option>
                            <option value="4036">CR504</option>
                            <option value="4075">CR501</option>
                            <option value="4085">Physics Lab</option>
                            <option value="4087">IAPT asian physics olypiyad lab</option>
                            <option value="4089">CR502</option>
                            <option value="4069">Lab 5</option>
                            <option value="4101">chemistry Lab</option>
                            <option value="4057">Staff room 51</option>
                            <option value="4056">Staff room 52</option>
                            <!-- <option value="4073">Teacher office</option> -->
                            <!-- <option value="4091">3rd HOD office</option> -->
                    </optgroup>
                    <optgroup label="5th floor">
                            <option value="5119">Manual Drawing lab</option>
                            <option value="5003">Dr K P Nautiyal Auditorium</option>
                            <option value="5006">reachers scholer room (room beside audi)</option>
                            <!-- <option value="5052">Teacher office</option> -->
                            <option value="5017">moot court</option>
                            <option value="5025">Nss Unit Office</option>
                            <option value="5031">LT601</option>
                            <option value="5041">LT602</option>
                            <option value="5033">CR605</option>
                            <option value="5075">CR601</option>
                            <option value="5071">CR602</option>
                            <option value="5085">CR603</option>
                            <option value="5087">Fashion Design (studio and theory room)</option>
                            <option value="5089">CR604</option>
                            <option value="5069">Lab 6</option>
                            <option value="5101">Library II(Top floor)</option>
                            <option value="5057">Staff room 61</option>
                            <option value="5056">Staff room 62</option>
                            <option value="5036">Staff room 63</option>
                            <option value="5073">Teacher office</option>
                    </optgroup>
                    <optgroup label="Underground floor">
                        	<option value="6004">Exam Controller</option>
                        	<option value="6006">CCTV Room</option>
                        	<option value="6122">Degree and Certficates</option>
                        	<option value="6015">Registerar Office</option>
                        	<option value="6017">Fee Cell</option>
                        	<option value="6118">Basement Class</option>
                        	<option value="6191">workshop</option>
                        	<option value="6190">Civil Engineering Lab</option>
                        	<option value="6073">Teacher Dining Area</option>
                        	<option value="6173">Tuck Shop</option>
                        	<option value="6091">Mess</option>
                        	<option value="6085">Cafeteria</option>
                        	<option value="6177">Parking</option>
                    </optgroup>
"""

soup = BeautifulSoup(html_code, "html.parser")

result = {}

for optgroup in soup.find_all("optgroup"):
    label = optgroup["label"]
    for option in optgroup.find_all("option"):
        result[option.text.strip()] = option["value"]

result = "class_to_id = " + str(result)
with open("class_to_id_dict.py", "w") as file:
    file.write(result)