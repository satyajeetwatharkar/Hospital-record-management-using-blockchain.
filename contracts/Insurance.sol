pragma solidity >=0.4.22 <0.7.0;


contract Insurance{

struct insurance{
     string applicable;
     uint64 policy_no;
     string insurer;
     string policy_type;
     string policy_limit;
     }


     mapping(uint256 => insurance) insurancelist;
     insurance i;

     function insurance_details(uint256 patient_id,string memory _applicable,uint64 _policy_no,string memory _insurer,string memory _policy_type,string memory _policy_limit)public {


                        i.applicable = _applicable;
                        i.policy_no = _policy_no;
                        i.insurer = _insurer;
                        i.policy_type = _policy_type;
                        i.policy_limit = _policy_limit;

                        insurancelist[patient_id] = i;

                    }
   function get_insurance(uint256 patient_id)public view returns (string memory,uint64,string memory,string memory,string memory){

                       insurance memory il = insurancelist[patient_id];
                       return (il.applicable, il.policy_no,il.insurer,il.policy_type,il.policy_limit);
                    }
      //History

     struct history{
     string complaints;
     string duration;
     }
     mapping(uint256 => history) patienthistory;
    history hi;

    function present_illness(uint256 patient_id,string memory _complaints,string memory _duration)public {

                                 hi.complaints = _complaints;
                                 hi.duration = _duration;

                                 patienthistory[patient_id] = hi;
                             }
    function get_present_illness(uint256 patient_id)public view returns (string memory,string memory){

                                  history memory hil = patienthistory[patient_id];
                                  return (hil.complaints,hil.duration);
                             }


//Past Illness

     struct past{
     string family_history;
     string personal_history;
     string drug_history;
     }
     mapping(uint256 => past) pasthistory;
     past pa;

     function past_illness(uint256 patient_id,string memory _family_history,string memory _personal_history,string memory _drug_history)public {

                                          pa.family_history = _family_history;
                                          pa.personal_history = _personal_history;
                                          pa.drug_history = _drug_history;


                                          pasthistory[patient_id] = pa;
                                      }

     function get_past_illness(uint256 patient_id)public view returns (string memory,string memory,string memory){

                                           past memory pal = pasthistory[patient_id];
                                           return (pal.family_history,pal.personal_history,pal.drug_history);
                                      }



//Diagnosis

     struct diag{
     string diag_summary;
     string prescription;
}
mapping(uint256 => diag) diagnosis;
diag du;

function func_diagnosis(uint256 patient_id,string memory _diag_summary,string memory _prescription)public {


                                             du.diag_summary = _diag_summary;
                                             du.prescription = _prescription;


                                             diagnosis[patient_id] = du;

                                         }
  function get_func_diagnosis(uint256 patient_id)public view returns (string memory,string memory){

                                              diag memory dl = diagnosis[patient_id];

                                             return (  dl.diag_summary,dl.prescription);

                                             }
//Treatment



struct treat{
     string treatment;
     string date_treatment;
      uint256 doctor_id;
     uint256 hospital_id;
     string discharge;
     string follow_up;
     }
     mapping(uint256 => treat) treatment;
     treat tr;

     function treatment_summary(uint256 patient_id,string memory _treatment,string memory _date_treatment,uint256 _doctor_id,uint256 _hospital_id,string memory _discharge,string memory _follow_up)public {


                                                          tr.treatment = _treatment;
                                                          tr.date_treatment = _date_treatment;
                                                          tr.doctor_id = _doctor_id;
                                                          tr.hospital_id = _hospital_id;
                                                          tr.discharge = _discharge;
                                                          tr.follow_up = _follow_up;


                                                          treatment[patient_id] = tr;

                                                      }

       function get_treatment_summary(uint256 patient_id)public view returns (string memory,string memory,uint256,uint256,string memory,string memory){

                                                           treat memory trl = treatment[patient_id];

                                                          return (trl.treatment,trl.date_treatment,trl.doctor_id,trl.hospital_id,trl.discharge,trl.follow_up);

                                                          }

}
