import React, { useState } from 'react';
import socialWorkData from '../data/socialWorkData.json';
import '../assets/styles/style.css';
import mrNurtureAndSuture from '../assets/images/mr-1.png';
import mrJamnabaiScool from '../assets/images/mr-2.png';
import mrUtpalSchool from '../assets/images/utpal-sanghvi.png';
import mrChatrabhujSchool from '../assets/images/cnms.png';
import bloodDonation from '../assets/images/blood_donation.png';
import ppeKitsDonation from '../assets/images/ppe_kits_donation.png';
import Layout from './Layout';
import Footer from './Footer';
import GoToTopButton from '../components/GoToTopButton';

const imageMap = {
  "Campaign At Nurture And Suture Clinic": mrNurtureAndSuture,
  "Campaign At Jamnabai Narsee School": mrJamnabaiScool,
  "Campaign At Utpal Sanghvi International School": mrUtpalSchool,
  "Campaign At Chatrabhuj Narsee Memorial School": mrChatrabhujSchool,
  "Blood Donation": bloodDonation,
  "PPE Kits Donation": ppeKitsDonation
};

function SocialWork() {
  const [selectedCategory, setSelectedCategory] = useState('News Channel');
  const [selectedWork, setSelectedWork] = useState(null);

  const filteredWorks = socialWorkData.filter(work => {
    return work.category === selectedCategory;
  });

  const openModal = (work) => {
    setSelectedWork(work);
  };

  const closeModal = () => {
    setSelectedWork(null);
  };

  return (
    <>
    <Layout/>
    <div>
      <div className="social-work">
        <h1 className="social-work-text">Social Work</h1>
      </div>

      <div className="p-20">
        <div className="category-box">
          <button
            onClick={() => setSelectedCategory('News Channel')}
            className={`category-button ${selectedCategory === 'News Channel' ? 'selected' : ''}`}
          >
            News Channel
          </button>
          <button
            onClick={() => setSelectedCategory('MR Vaccine Campaign')}
            className={`category-button ${selectedCategory === 'MR Vaccine Campaign' ? 'selected' : ''}`}
          >
            MR Vaccine Campaign
          </button>
          <button
            onClick={() => setSelectedCategory('Donations')}
            className={`category-button ${selectedCategory === 'Donations' ? 'selected' : ''}`}
          >
            Donations
          </button>
        </div>

        <div className="pt-20">
          {selectedCategory === 'News Channel' ? (
            <div className="news-channel-content">
              <p className="news-channel-description">
                Dr. Parthiv Sanghvi and Dr. Jagruti Sanghvi have appeared on prominent TV channels such as Republic Bharat, ABP News, Zee News, and Zee Bharat. During these appearances, they have discussed critical topics including COVID-19, the coronavirus, and effective prevention strategies to protect against such deadly viruses.
              </p>
              <div className='news-channel-box'>
                <a
                  href="https://www.youtube.com/@nurturesuture80"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="news-channel-button"
                >
                  Go to YouTube Channel
                </a>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 gap-y-8">
              {filteredWorks.map(work => (
                <div key={work.id} className="social-work-card max-w-sm">
                    <img
                      src={imageMap[work.name]}
                      alt={work.name}
                      className="rounded-t-2xl w-full h-86 object-cover"
                    />
                  <h2 className="social-work-card-text">{work.name}</h2>
                  <div className="social-work-card-button">
                    {work.category !== 'News Channel' && (
                      <button onClick={() => openModal(work)}>Know More</button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {selectedWork && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{selectedWork.name}</h2>
            <p className='text-justify'>{selectedWork.description}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
      <br />
    </div>
    <Footer/>
    <GoToTopButton/>
    </>
  );
}

export default SocialWork;
