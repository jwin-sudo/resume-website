import React from 'react'

const experiences = [
  {
    company: 'Cognizant',
    location: 'Richardson, TX',
    role: 'Data Engineer Consultant',
    dates: 'April 2022 – Current',
    details: [
      'Gained hands-on experience in data engineering through Cognizant’s internal training program.',
      'Languages: Python, Scala, Linux, Database, PostgreSQL, MySQL, Git.',
      'On-Premise: Proficient in Apache Hadoop, HDFS, Hive, Spark (PySpark, RDD, DataFrame, Streaming, SQL), Kafka, Yarn, Zookeeper, Presto, Sqoop, JDBC.',
      'Big Data: Specialized in ETL processes, working with CSV, JSON, Data Lakes, Data Warehouses, and file formats like AVRO, PARQUET, and ORC.',
      'Cloud: Experience with AWS (Databricks, S3, Redshift, Glue, Athena, Lambda, RDS) and managed services such as Kafka MSK, Kinesis, and IoT.',
    ],
  },
  {
    company: 'Capital One',
    location: 'Plano, TX',
    role: 'Data Engineer Contractor',
    dates: 'May 2024 – Current',
    details: [
      'Developed and optimized ata processing functions using Spark and Polars engines to efficiently filter and union large datasets, improving data pipeline performance.',
      'Provided ongoing production support, diagnosing and resolving ecosystem issues, ensuring minimal downtime and high data reliability.',
      'Designed and implemented integration tests and automated data validation tools to ensure data consistency and accury across Spark and Polars engines, while aligning with other codebases.',
    ],
  },
  {
    company: 'Duke Energy Corporation',
    location: 'Charlotte, North Carolina',
    role: 'Data Engineer Contractor',
    dates: 'March 2023 – February 2024',
    details: [
      'Built and configured CI/CD pipelines using Concourse and Terraform for cloud deployments.',
      'Employed XP and pair programming models, leveraging TDD practices for robust development.',
      'Developed APIs with AWS services (API Gateway, Lambda, EMR, SNS/SQS, Glue) to transform and migrate data from S3/MySQL to RDS/Athena/Redshift.',
    ],
  },
  {
    company: "Macy's",
    location: 'Duluth, Georgia',
    role: 'Data Engineer Contractor',
    dates: 'March 2023 – February 2024',
    details: [
      'Authored and executed 80+ test cases to ensure messaging accuracy between data sources on GCP.',
      'Developed end-to-end functional test cases, achieving a 95% success rate for data transfer processes on GCP.',
    ],
  },
  {
    company: 'Apple',
    location: 'Cambridge, MA',
    role: 'Software QA Tester - Contractor',
    dates: 'July 2022 – November 2022',
    details: [
      'Enhanced customer satisfaction through optimized testing and validation, ensuring 99% feature accuracy.',
      'Troubleshot issues across 200+ devices, reducing downtime by 75% with effective root cause analysis and rapid resolution',
    ],
  },
  {
    company: 'HCL Technologies',
    location: 'Frisco, TX',
    role: 'Full-Stack Developer',
    dates: 'October 2020 – January 2022',
    details: [
      'Improved job efficiency by 75% through parameterized mappings in Snowflake and Informatica.',
      'Developed and managed UC4 job scheduling for 230+ concurrent ETL workflows, improving performance by 50%.',
      'Built a scalable banking application using Java, Spring, SQL, and JavaScript, increasing customer engagement by 45%.',
    ],
  },
  {
    company: 'Essilor of America',
    location: 'Dallas, TX',
    role: 'Full-Stack Developer',
    dates: 'October 2018 – May 2020',
    details: [
      'Developed the New Product Studio application using C#, ASP .NET, JavaScript, HTML/CSS, and SQL to streamline data extraction and analytics.',
      'Created Titan, a web-based platform for data visualization, enhancing decision-making capabilities for internal users.',
      'Improved user experience by optimizing the UI for the Titan application, supporting over 10 internal users.',
    ],
  },

  // Add other work experiences here
]

const Experience = () => (
  <section className='experience'>
    <h2>Work Experience</h2>
    {experiences.map((exp, index) => (
      <div key={index} className='job'>
        <h3>
          {exp.role} - {exp.company}
        </h3>
        <h10>{exp.location}</h10>
        <p>
          <em>{exp.dates}</em>
        </p>
        <ul>
          {exp.details.map((detail, idx) => (
            <li key={idx}>{detail}</li>
          ))}
        </ul>
      </div>
    ))}
  </section>
)

export default Experience
