pragma solidity >=0.4.22 <0.7.0;


contract Scan{

struct tests{
     string blood_test;
     string urine_test;
     string ecg;
     string mri_scan;
     string ct_scan;
     string xray;
     string lab_test;
}
mapping(uint256 => tests) patienttests;
tests t;
function investigations(uint256 patient_id,string memory _blood_test,string memory _urine_test,string memory _ecg,string memory _mri_scan,string memory _ct_scan,string memory _xray,string memory _lab_test)public {


                                                             t.blood_test = _blood_test;
                                                             t.urine_test = _urine_test;
                                                             t.ecg = _ecg;
                                                             t.mri_scan = _mri_scan;
                                                             t.ct_scan = _ct_scan;
                                                             t.xray = _xray;
                                                             t.lab_test = _lab_test;


                                                             patienttests[patient_id] = t;

                                                         }
function get_investigations(uint256 patient_id)public view returns (string memory,string memory,string memory,string memory,string memory,string memory,string memory){

                                                            tests memory tl = patienttests[patient_id];

                                                             return ( tl.blood_test,tl.urine_test,tl.ecg,tl.mri_scan,tl.ct_scan, tl.xray,tl.lab_test);

                                                             }
//Scan


struct scan{
     string built;
     string nouirishment;
     string eyes;
     string tongue;
     uint64 pulse;
     uint64 temp;
     string blood_pressure;
     uint64 respiratory_rate;
}

mapping(uint256 => scan) scantests;
scan su;

function general_examin(uint256 patient_id,string memory _built,string memory _nouirishment,string memory _eyes,string memory _tongue,uint64 _pulse,string memory _blood_pressure,uint64 _temp,uint64 _respiratory_rate)public {


                                                                           su.built = _built;
                                                                           su.nouirishment = _nouirishment;
                                                                           su.eyes = _eyes;
                                                                           su.tongue = _tongue;
                                                                           su.pulse = _pulse;
                                                                           su.blood_pressure = _blood_pressure;
                                                                           su.temp = _temp;
                                                                           su.respiratory_rate = _respiratory_rate;


                                                                           scantests[patient_id] = su;

                                                                       }
function get_general_examin(uint256 patient_id)public view returns (string memory,string memory,string memory,string memory,uint64,string memory,uint64,uint64){

                                                                            scan memory sll = scantests[patient_id];

                                                                           return ( sll.built,sll.nouirishment,sll.eyes,sll.tongue,sll.pulse,sll.blood_pressure,sll.temp,sll.respiratory_rate);

                                                                           }
//System

struct system{
     string cns;
     string cvs;
     string rs;
     string abdomen;
}

    mapping(uint256 => system) systemexamine;
    system sys;
function sys_examin(uint256 patient_id,string memory _cvs,string memory _cns,string memory _rs,string memory _abdomen)public {


                                                                                         sys.cvs = _cvs;
                                                                                         sys.cns = _cns;
                                                                                         sys.rs = _rs;
                                                                                         sys.abdomen = _abdomen;


                                                                                         systemexamine[patient_id] = sys;

                                                                                     }
function get_sys_examin(uint256 patient_id)public view returns (string memory,string memory,string memory,string memory){

                                                                                          system memory sysl = systemexamine[patient_id];

                                                                                         return (  sysl.cvs,sysl.cns,sysl.rs,sysl.abdomen);

                                                                                         }



}
