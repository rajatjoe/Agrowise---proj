import React, { useState } from 'react';
import ImageUploader from '../components/ImageUploader';

const Diseasse = () => {
  const [analysisData, setAnalysisData] = useState(null);
  const [showUploader, setShowUploader] = useState(true);

  // Simulate setting analysis data when an image is uploaded
  const handleImageUpload = (data) => {
    // Replace this with actual logic to analyze the image and set data
    const sampleData = {
      leaf_image_id: "1",
      pests: {
        affected: true,
        details: "Spider mites detected.",
        suggestions: [
          "Use miticide or neem oil to control the spider mites.",
          "Increase humidity around the plant to make it less hospitable to pests.",
          "Regularly inspect the plant and remove infested leaves."
        ]
      },
      image_analysis: {
        confidence_score: 0.92,
        timestamp: new Date().toISOString()
      }
    };
    setAnalysisData(sampleData);
    setShowUploader(false);
  };

  return (
    <div className="diseasse">
      <div className="container">
        {showUploader ? (
          <div className="image-upload">
            <ImageUploader onUpload={handleImageUpload} />
            <button onClick={() => handleImageUpload()}>Submit</button>
          </div>
        ) : (
          <div className="analysis-data">
            {analysisData ? (
              <div className="data-card">
                <h3>Analysis Data</h3>
                <p><strong>Leaf Image ID:</strong> {analysisData.leaf_image_id}</p>
                <p><strong>Pests Affected:</strong> {analysisData.pests.affected ? "Yes" : "No"}</p>
                {analysisData.pests.affected && (
                  <>
                    <p><strong>Details:</strong> {analysisData.pests.details}</p>
                    <h4>Suggestions:</h4>
                    <ul>
                      {analysisData.pests.suggestions.map((suggestion, index) => (
                        <li key={index}>{suggestion}</li>
                      ))}
                    </ul>
                  </>
                )}
                <p><strong>Confidence Score:</strong> {analysisData.image_analysis.confidence_score}</p>
                <p><strong>Timestamp:</strong> {analysisData.image_analysis.timestamp}</p>
              </div>
            ) : (
              <p>No analysis data available. Please upload an image.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Diseasse;
