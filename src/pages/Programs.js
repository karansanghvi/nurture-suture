import React, { useState } from 'react';
import programsData from '../data/programsData.json';
import '../assets/styles/style.css';
import medialHealthCheckup from '../assets/images/medical_health_checkup.png';
import cprAwarnessAudi from '../assets/images/cpr_awarness_bmw.png';
import cprAwarnessChetna from '../assets/images/cpr_iap.png';
import menstrualHygineAtAdarsh from '../assets/images/menstrual_hygine.png';
import firstAidEducation from '../assets/images/first_aid_education.png';
import worldKidneyDay from '../assets/images/world_kidney_day.png';
import sayingNoToAddiction from '../assets/images/no_to_addiction.png';
import newbornWeek from '../assets/images/newborn_week.png';
import cmeOnGoodPractice from '../assets/images/good_practices_on_paediatrics.png';
import teenageRelationships from '../assets/images/teenage_relationships.png';
import adolescentWeek from '../assets/images/drug_abuse_and_addiction_awarness.png';
import dietToPreventObesity from '../assets/images/diet_to_prevent_obseity.png';
import firstAidSession from '../assets/images/first_aid.png';
import healthCheckup from '../assets/images/health_checkup_NSM.png';
import lifeSupportSession from '../assets/images/basic_life_support.png';
import nutritionAndAddiction from '../assets/images/nutrition_and_addiction.png';
import cprIrla from '../assets/images/bls_workshop.png';
import kangarooMotherCare from '../assets/images/kangaroo_mother_care.png';
import childhoodObesity from '../assets/images/childhood_obesity.png';
import pubertyWorkshop from '../assets/images/puberty.png';
import nationalDewarmingDay from '../assets/images/national_dewarming_day.png';
import substanceAbuse from '../assets/images/substance_abuse.png';
import pulsePolio from '../assets/images/pulse_polio.png';
import faqInVaccination from '../assets/images/faq_on_vaccination.png';
import healthCheckupSlum from '../assets/images/health_chekcup_slum.png';
import womansDay from '../assets/images/guiding_girls.png';
import periods from '../assets/images/periods.png';
import micronutrientDeficiency from '../assets/images/micronutrient_deficiency.png';
import cmeOnGenetics from '../assets/images/genetics.png';

const imageMap = {
  "Medical Health Checkup At Sane Guruji Vidyalaya": medialHealthCheckup,
  "CPR Awarness At Audi Showroom, Mumbai": cprAwarnessAudi,
  "CPR Awarness At Chetna College at Bandra": cprAwarnessChetna,
  "Menstrual Hygine At Adarsh Foundation": menstrualHygineAtAdarsh,
  "First Aid Education At KDN Shruti School": firstAidEducation,
  "World Kidney Day At Cooper Hospital": worldKidneyDay,
  "Saying No To Addiction At Samata Krida Bhavan": sayingNoToAddiction,
  "Newborn Week At Advanced Multi-Speciality Hospital": newbornWeek,
  "CME On Good Practices in Paediatrics": cmeOnGoodPractice,
  "Teenage Relationship Session At Gurukul Junior College": teenageRelationships,
  "Adolescent Week at Bhagubhai Polytechnic": adolescentWeek,
  "Diet to Prevent Obesity At Chandulal Nanavati School": dietToPreventObesity,
  "First Aid Session At Bhaidas Bhuta High School": firstAidSession,
  "Health Checkup Camp At NSM School": healthCheckup,
  "Life Support Session At Garodia International School": lifeSupportSession,
  "Nutrition And Addiction At BPM School": nutritionAndAddiction,
  "CPR Workshop At Irla Nursing Home": cprIrla,
  "Kangaroo Mother Care At Advanced Hospital": kangarooMotherCare,
  "Childhood Obsesity Talk At Aditya Birla Hospital": childhoodObesity,
  "Puberty Workshop At Shruti School Juhu, Mumbai": pubertyWorkshop,
  "National Dewarming Day At Cooper Hospital": nationalDewarmingDay,
  "Perils of Substance Abuse in Teenager At Sathaye College": substanceAbuse,
  "Pulse Polio Campaign At Nurture And Suture": pulsePolio,
  "FAQs In Vaccination At Indian Medial Association": faqInVaccination,
  "Health Checkup Camp For Slum Childeren": healthCheckupSlum,
  "Woman's Day At Shri Bhaghubhai Mafatlal Polytechnic": womansDay,
  "Cashless, Rashless, Trashless and Carefree Periods": periods,
  "Micronutrient Deficiency For Childeren": micronutrientDeficiency,
  "CME On Genetics At Nanavati Super Speciality Hospital": cmeOnGenetics
};

function Programs() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const openModal = (program) => {
    setSelectedProgram(program);
  };

  const closeModal = () => {
    setSelectedProgram(null);
  };

  return (
    <div className="mt-32">
      <div className="programs">
        <h1 className="programs-text">Programs</h1>
      </div>
      
      <div className="p-20">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-y-8">
          {programsData.map((program) => (
            <div key={program.id} className="programs-card max-w-sm">
              <img src={imageMap[program.name]} alt={program.name} className="rounded-t-2xl w-full h-86 object-cover" />
              <div className="p-5">
                <h2 className="programs-name">{program.name}</h2>
                <br/>
                <button
                  onClick={() => openModal(program)}
                  className="programs-button"
                >
                  Know More
                </button>
              </div>
          </div>          
          ))}
        </div>
      </div>

      {selectedProgram && (
        <div className="modal-overlay fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="modal bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold">{selectedProgram.name}</h2>
            <p className="mt-4">{selectedProgram.description}</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <br />
    </div>
  );
}

export default Programs;
