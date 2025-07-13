// vCardPortfolio.jsx
import React from "react";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/amernajdawi", icon: "🐙" },
  { name: "LinkedIn", url: "https://linkedin.com/in/amer-alnajdawi", icon: "🔗" },
  { name: "Email", url: "mailto:amer.alnajdawi@example.com", icon: "📧" },
];

const skills = [
  "Python",
  "Machine Learning",
  "NLP",
  "LLM Development",
  "RAG Applications",
  "TensorFlow",
  "PyTorch",
  "Streamlit",
  "HuggingFace",
  "Transformers",
  "AI Development",
  "Software Engineering"
];

const projects = [
  {
    name: "e-novations EV Charging",
    description: "Backend algorithm to find optimal electric vehicle charging tariffs from various providers in Austria based on customer location.",
    url: "https://github.com/amernajdawi/e-novations",
  },
  {
    name: "AI Customer Identification",
    description: "LLM-based application to identify potential customers for business development.",
    url: "https://github.com/amernajdawi/ai-customer-identification",
  },
  {
    name: "Medical Data Extraction",
    description: "LLM-based solution for automated data extraction tasks in healthcare domain.",
    url: "https://github.com/amernajdawi/medical-data-extraction",
  },
];

export default function VCardPortfolio() {
  return (
    <div style={styles.container}>
      <img
        src="image0.jpeg"
        alt="Amer Alnajdawi Profile"
        style={styles.photo}
      />
      <h1 style={styles.name}>Amer Alnajdawi</h1>
      <h2 style={styles.title}>AI & Software Developer</h2>
      <p style={styles.bio}>
        Passionate AI & Software Developer currently pursuing a Master's degree in Artificial Intelligence with a specialization in Natural Language Processing. Expert in developing LLM and RAG-based applications, creating solutions that bridge complex AI concepts with real-world applications.
      </p>

      <section>
        <h3>Skills</h3>
        <ul style={styles.skillsList}>
          {skills.map((skill) => (
            <li key={skill} style={styles.skillItem}>
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Featured Projects</h3>
        <ul style={styles.projectsList}>
          {projects.map(({ name, description, url }) => (
            <li key={name} style={styles.projectItem}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <strong>{name}</strong>
              </a>
              : {description}
            </li>
          ))}
        </ul>
      </section>

      <section style={styles.experienceSection}>
        <h3>Current Role</h3>
        <div style={styles.experienceItem}>
          <strong>AI Software Developer</strong> at Timeless Soft GmbH
          <br />
          <em>June 2025 – Present, Vienna, Austria</em>
        </div>
      </section>

      <footer>
        <h3>Connect with me</h3>
        <ul style={styles.socialList}>
          {socialLinks.map(({ name, url, icon }) => (
            <li key={name} style={styles.socialItem}>
              <a href={url} target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                {icon} {name}
              </a>
            </li>
          ))}
        </ul>
        <div style={styles.cvDownload}>
          <a href="amernajdawi_CV.pdf" download style={styles.cvLink}>
            📄 Download CV
          </a>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "30px auto",
    padding: "25px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  photo: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "20px",
    border: "4px solid #4f46e5",
  },
  name: {
    margin: "0",
    fontSize: "2rem",
    color: "#1e293b",
    fontWeight: "700",
  },
  title: {
    margin: "8px 0 20px",
    fontWeight: "500",
    color: "#4f46e5",
    fontSize: "1.1rem",
  },
  bio: {
    fontSize: "0.95rem",
    color: "#64748b",
    marginBottom: "30px",
    lineHeight: "1.6",
    textAlign: "left",
  },
  skillsList: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "8px",
    marginBottom: "30px",
  },
  skillItem: {
    backgroundColor: "#4f46e5",
    color: "#fff",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "0.8rem",
    fontWeight: "500",
  },
  projectsList: {
    listStyle: "none",
    padding: 0,
    textAlign: "left",
    marginBottom: "30px",
  },
  projectItem: {
    marginBottom: "15px",
    fontSize: "0.9rem",
    lineHeight: "1.5",
  },
  experienceSection: {
    marginBottom: "30px",
    textAlign: "left",
  },
  experienceItem: {
    fontSize: "0.9rem",
    color: "#64748b",
    lineHeight: "1.5",
  },
  socialList: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "20px",
  },
  socialItem: {},
  socialLink: {
    fontSize: "1rem",
    color: "#4f46e5",
    textDecoration: "none",
    fontWeight: "500",
  },
  cvDownload: {
    marginTop: "20px",
    paddingTop: "20px",
    borderTop: "1px solid #e2e8f0",
  },
  cvLink: {
    display: "inline-block",
    backgroundColor: "#4f46e5",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "8px",
    textDecoration: "none",
    fontSize: "0.9rem",
    fontWeight: "500",
    transition: "background-color 0.3s ease",
  },
}; 