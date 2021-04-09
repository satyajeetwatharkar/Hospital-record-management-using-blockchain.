pragma solidity >=0.4.22 <0.7.0;
/**
 * @title Medical records
 * @dev Store & retreive Doctor details
 */


contract Meme {

//Doctor


     struct doctor{
         string doctor_name;
         string doctor_specialisation;
         uint256 doctor_ph_no;
         string doctor_address;
     }

     mapping(uint256 => doctor) doctorlist;
     doctor d;

     function store_doctor_details(uint16 doctor_id,string memory _doctor_name,string memory _doctor_specialisation,uint256 _doctor_ph_no,string memory _doctor_address) public{

           d.doctor_name = _doctor_name;
           d.doctor_specialisation = _doctor_specialisation;
           d.doctor_ph_no = _doctor_ph_no;
           d.doctor_address = _doctor_address;


          doctorlist[doctor_id] = d;


     }

     function retreive_doctor_details(uint16 doctor_id) public view returns (string memory,string memory,uint256,string memory){

       doctor memory dl = doctorlist[doctor_id];

       return (dl.doctor_name,dl.doctor_specialisation,dl.doctor_ph_no,dl.doctor_address);

      }

      //Staff

     struct staff{
         string staff_name;
         string staff_specialisation;
         uint256 staff_ph_no;
         string staff_address;
     }
     mapping(uint256 => staff) stafflist;
     staff s;

     function store_staff_details(uint16 staff_id,string memory _staff_name,string memory _staff_specialisation,uint256 _staff_ph_no,string memory _staff_address) public{

           s.staff_name = _staff_name;
           s.staff_specialisation = _staff_specialisation;
           s.staff_ph_no = _staff_ph_no;
           s.staff_address = _staff_address;


          stafflist[staff_id] = s;


     }





    function retreive_staff_details(uint16 staff_id) public view returns (string memory,string memory,uint256,string memory){

      staff memory sl = stafflist[staff_id];

      return (sl.staff_name,sl.staff_specialisation,sl.staff_ph_no,sl.staff_address);

           }


        //Patient

     struct patient{
     string patient_name;
     uint256 age;
     string gender;
     string height;
     uint256 weight;
     string patient_address;
     uint256 phone_no;
     string email_id;
     uint256 date;
     uint256 doctor_id;
     uint256 hospital_id;
     }
     mapping(uint256 => patient) patientlist;
     patient p;


         function store_patient_details(uint256 patient_id,string memory _patient_name,uint256 _age,string memory _gender,string memory _height,uint256 _weight,string memory _patient_address,uint256 _phone_no,string memory _email_id,uint256 _date)public {


                     p.patient_name=_patient_name;
                     p.age=_age;
                     p.gender=_gender;
                     p.height=_height;
                     p.weight=_weight;
                     p.patient_address=_patient_address;
                     p.phone_no=_phone_no;
                     p.email_id=_email_id;
                     p.date=_date;

                    patientlist[patient_id] = p;
                     }

           function retreive_patient_details(uint256 patient_id) public view returns (string memory,uint256,string memory,string memory,uint256,string memory,uint256,string memory,uint256){
                        patient memory pl = patientlist[patient_id];

                    return (pl.patient_name,pl.age,pl.gender,pl.height,pl.weight,pl.patient_address,pl.phone_no,pl.email_id,pl.date);

                    }

     //Attendant

     struct attendant{
         uint256 patient_id;
     string attendant_name;
     string attendant_relation;
     uint256 attendant_phn_no;
     }

     mapping(uint256 =>attendant) attendantlist;
     attendant a;

     function store_attendant_details(uint256 patient_id,string memory _attendant_name,string memory _attendant_relation, uint256 _attendant_phn_no)public{

                 a.patient_id = patient_id;
                a.attendant_name=_attendant_name;
                 a.attendant_relation=_attendant_relation;
                 a.attendant_phn_no=_attendant_phn_no;

                 attendantlist[patient_id] = a;
             }

   function retreive_attendant_details(uint256 patient_id) public view returns (string memory,string memory,uint256){

                 attendant memory al = attendantlist[patient_id];

             return (al.attendant_name,al.attendant_relation,al.attendant_phn_no);

            }

          
}
