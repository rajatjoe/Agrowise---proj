import axios from 'axios';
import React, { useState } from 'react';
import ImageUploader from '../components/ImageUploader';

const Diseasse = () => {
  const [image, setImage] = useState(null);
    const [prediction, setPrediction] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };

    const handleSubmit = async () => {
        if (!image) return;

        setLoading(true);

        // Convert image to base64 or form data
        const formData = new FormData();
        formData.append('image', image);

        try {
            const response = await axios.post('http://127.0.0.1:5000/predict', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setPrediction(response.data.prediction);
        } catch (error) {
            console.error('Error making prediction:', error);
        } finally {
            setLoading(false);
        }
    };

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
       <div>
            <input type="file" onChange={handleImageChange} />
            <button onClick={handleSubmit} disabled={loading}>
                {loading ? 'Loading...' : 'Predict'}
            </button>
            {prediction && (
                <div>
                    <h3>Prediction:</h3>
                    <pre>{JSON.stringify(prediction, null, 2)}</pre>
                </div>
            )}
        </div>
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
