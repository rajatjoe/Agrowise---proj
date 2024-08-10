import React from 'react';

const schemeData = [
  {
    "id": 1,
    "schemeName": "PM-KISAN",
    "description": "Central Sector Scheme with the objective of transferring income support to all landholding farmer families in the country",
    "eligibilityCriteria": "Farmers families with cultivable landholding up to 2 hectares",
    "benefits": "Rs. 6000 per year in three equal installments",
    "applicationProcess": "Link Aadhaar with land records, apply online or through CSC",
    "website": "https://pmkisan.gov.in/",
    "status": "Active",
    "imageUrl": "https://sscnr.net.in/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-11-at-21.08.07.jpg"
  },
  {
    "id": 2,
    "schemeName": "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    "description": "Aims to provide insurance coverage and financial support to farmers in the event of failure of any of the notified crops as a result of natural calamities, pests & diseases.",
    "eligibilityCriteria": "All farmers growing notified crops in notified areas during the season who have insurable interest in the crop.",
    "benefits": "Insurance coverage and financial support",
    "applicationProcess": "Apply through banks or Common Service Centers (CSCs)",
    "website": "https://pmfby.gov.in/",
    "status": "Active",
    "imageUrl": "https://www.mygov.in/sites/all/themes/mygov/images/pmfby/pmfby-banner.jpg"
  },
  {
    "id": 3,
    "schemeName": "Pradhan Mantri Krishi Sinchai Yojana (PMKSY)",
    "description": "Aims to improve on-farm water use efficiency through various means such as micro irrigation and precision farming.",
    "eligibilityCriteria": "All farmers and groups of farmers, including small and marginal farmers",
    "benefits": "Financial assistance for irrigation projects",
    "applicationProcess": "Apply through the respective state agriculture department",
    "website": "https://pmksy.gov.in/",
    "status": "Active",
    "imageUrl": "https://st.adda247.com/https://www.sscadda.com/wp-content/uploads/multisite/sites/2/2022/03/08184516/Pradhan-Mantri-Krishi-Sinchai-Yojana-1.png"
  },
  {
    "id": 4,
    "schemeName": "Soil Health Card Scheme",
    "description": "Provides soil health cards to farmers which contain information about the nutrient status of their soil along with recommendations on appropriate dosage of nutrients to be applied for improving soil health and its fertility.",
    "eligibilityCriteria": "All farmers",
    "benefits": "Soil health card with soil nutrient status and recommendations",
    "applicationProcess": "Soil samples are collected by the state government and analyzed in laboratories.",
    "website": "https://soilhealth.dac.gov.in/",
    "status": "Active",
    "imageUrl": "https://von.gov.ng/wp-content/uploads/2024/07/Soil-Health-Cards-2.jpg"
  }
];

const Schemes = () => {
  return (
    <div className='scheme-cont'>

    <div className='scheme-heading'>
      SCHEMES BY GOVERNMENT OF INDIA
    </div>




      {schemeData.map(scheme => (
        <div key={scheme.id}  className='scheme-card' >
          <h2 className='scheme-title'>{scheme.schemeName}</h2>
          <div className='imgsch-holder'>
          <img  className='sch-img' src={scheme.imageUrl} alt={scheme.schemeName} />
          </div>

          <p className='sch-desc'><strong>Description:</strong> {scheme.description}</p>
          <p className='sch-elig'><strong>Eligibility Criteria:</strong> {scheme.eligibilityCriteria}</p>
          <p><strong>Benefits:</strong> {scheme.benefits}</p>
          <p><strong>Application Process:</strong> {scheme.applicationProcess}</p>
          <p><strong>Website:</strong> <a href={scheme.website} target="_blank" rel="noopener noreferrer">{scheme.website}</a></p>
          <p><strong>Status:</strong> {scheme.status}</p>
        </div>
      ))}
    </div>
  );
}

export default Schemes;
