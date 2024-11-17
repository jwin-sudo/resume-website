import React from 'react'

const skills = [
  'Programming Languages: Python, Java, C#, Scala, JavaScript, SQL, UNIX, HTML/CSS',
  'Big Data: Hadoop, Spark, Hive, Kafka, Presto',
  'Cloud: AWS (S3, Redshift, Glue, Lambda), GCP',
  'Frameworks: React, ASP.NET, Spring, Flask, Django',
  'DevOps: Jenkins, Airflow, Terraform, Docker, Kubernetes',
]

const Skills = () => (
  <section className='skills'>
    <h2>Skills</h2>
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </section>
)

export default Skills
