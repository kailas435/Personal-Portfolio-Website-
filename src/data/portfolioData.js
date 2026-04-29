export const profile = {
  fullName: 'Kailas Nath',
  role: 'Data Science Intern',
  tagline: 'Building intelligent solutions from real-world data.',
  shortBio:
    'Final-year Data Science student focused on machine learning, storytelling with analytics, and deploying practical models that drive measurable outcomes.',
  location: 'Malappuram, Kerala, India',
  education:
    "Bachelor of computer Application(Hons), St.Mary's College Puthanangadi, University of Calicut (2024-2028)",
  domain: 'Data Scinece, Machine language, Data Analytics',
  imageUrl: 'C:\\Users\\USER\\Downloads\\IMG-20240731-WA00262.png',
  email: 'kailasnathp454@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kailas-nath-p-b86537285/',
  github: 'https://github.com/kailas435'
};

export const journey = `My journey started with curiosity around how Spotify and Netflix recommendations feel so personal. I began by learning Python and SQL, then moved into exploratory analysis and statistics. Over the last two years, I have built projects around prediction, classification, and segmentation while learning how to communicate insights clearly to non-technical audiences.`;

export const whyDataScience =
  'I love solving ambiguous problems where data can reveal hidden patterns. Data science allows me to blend math, coding, and design-thinking to build solutions that improve decisions and create real business impact.';

export const currentLearning = [
  'MLOps fundamentals with Docker + CI/CD',
  'Feature engineering for time-series forecasting',
  'Model explainability with SHAP and LIME',
  'Advanced SQL optimization for analytics workloads'
];

export const skills = {
  Programming: ['Python', 'R', 'SQL', 'JavaScript'],
  'Data Analysis': ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Power BI'],
  'Machine Learning': ['Scikit-learn', 'XGBoost', 'Classification', 'Regression', 'Clustering'],
  Tools: ['Git/GitHub', 'Jupyter', 'VS Code', 'Tableau', 'Excel']
};

export const projects = [
  {
    title: 'Customer Churn Risk Predictor',
    problem: 'High customer churn was reducing subscription revenue for a SaaS product.',
    dataset: 'Telecom customer behavior dataset (7,000+ records with usage and billing features).',
    approach:
      'Performed EDA, handled class imbalance with SMOTE, engineered tenure and engagement features, and compared baseline vs ensemble models.',
    model: 'XGBoost Classifier',
    results: 'F1-score: 0.87, ROC-AUC: 0.91, 18% lift in churn-risk identification over rule-based baseline.',
    learnings:
      'Balanced datasets and threshold tuning significantly improved recall for high-risk churn users.',
    github: 'https://github.com/aaravsharma-ds/churn-risk-predictor'
  },
  {
    title: 'House Price Estimation Engine',
    problem: 'Real-estate teams needed faster pricing recommendations for residential listings.',
    dataset: 'Kaggle housing dataset with 79 property features and historical sale prices.',
    approach:
      'Built preprocessing pipelines for missing values, encoding, and scaling; evaluated linear, random forest, and boosting regressors.',
    model: 'Gradient Boosting Regressor',
    results: 'RMSE reduced by 22% vs baseline linear model; R² score: 0.89.',
    learnings:
      'Feature interactions and robust preprocessing pipelines matter more than model complexity alone.',
    github: 'https://github.com/aaravsharma-ds/house-price-estimation'
  },
  {
    title: 'Retail Customer Segmentation',
    problem: 'Marketing campaigns had low conversion because audiences were too broad.',
    dataset: 'Online retail transactional dataset with purchase frequency and average order value.',
    approach:
      'Applied RFM analysis, scaled key features, used elbow + silhouette methods for cluster validation, and profiled clusters for targeting.',
    model: 'K-Means Clustering',
    results: 'Identified 4 actionable customer segments; campaign CTR improved by 27% in pilot simulation.',
    learnings: 'Interpretability of clusters is critical for adoption by business stakeholders.',
    github: 'https://github.com/aaravsharma-ds/retail-customer-segmentation'
  }
];

export const certifications = [
  {
    name: 'Machine Learning Specialization',
    platform: 'Coursera (DeepLearning.AI + Stanford)',
    takeaway: 'Built strong foundations in supervised, unsupervised, and best-practice ML workflows.'
  },
  {
    name: 'Google Data Analytics Professional Certificate',
    platform: 'Google / Coursera',
    takeaway: 'Strengthened end-to-end analytics skills from SQL cleaning to stakeholder-ready dashboards.'
  }
];

export const achievements = [
  'Finalist, University DataHack 2025',
  'Top 5% in Kaggle Playground Series (Tabular Classification)',
  'Mentor for first-year students in Intro to Python Lab'
];

export const blogPosts = [
  {
    title: 'From Notebook to Narrative: Presenting Data Projects That Get Noticed',
    summary:
      'A practical guide for students to transform technical experiments into compelling portfolio case studies for recruiters.',
    link: 'https://medium.com/@aarav.sharma.ds/notebook-to-narrative'
  },
  {
    title: 'Why Feature Engineering Still Beats Fancy Models in Student Projects',
    summary:
      'Lessons learned after comparing multiple algorithms across tabular datasets and understanding where real gains come from.',
    link: 'https://medium.com/@aarav.sharma.ds/feature-engineering-beats-fancy-models'
  }
];
