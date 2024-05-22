<template>
  <Container class="grid grid-flow-col place-content-center gap-8">
    <h2 class="text-4xl font-black text-center">
      My Experience
    </h2>
    <div
      class="
        w-1
        rounded
        bg-gradient-to-b
        from-transparent
        to-slate-800
        to-50%
      " 
    />
    <div class="flex flex-col gap-2">
      <ExperienceCard
        v-for="job, idx in jobs"
        :key="idx"
        :job="job"
      />
    </div>
  </Container>
</template>

<script setup lang="ts">
export type Job = {
  title: string
  startDate: string
  endDate: string
  company: string
  description: string
  url: string
}

const jobs: Job[] = [
  {
    title: 'Software Engineer',
    startDate: 'Jun 2022',
    endDate: 'Dec 2022',
    company: 'Tecnisys',
    description: `
      Development of new pages and features, fix bugs and vulnerabilities,
      creation of dashboards with Grafana, deployment of the application using
      Jenkins, and implementation of code improvements such as automated tests
      and documentation. Utilized technologies such as PHP, HTML/CSS,
      JavaScript, and PostgreSQL.
    `,
    url: `https://www.tecnisys.com.br`,
  },
  {
    title: 'Software Developer Intern',
    startDate: 'May 2021',
    endDate: 'Jun 2022',
    company: 'Ernest Manheim',
    description: `
      Development of an open-source linguistic ethnography tool to frame public
      opinion in mediatized groups. Responsibilities included analyzing
      messages, applying natural language processing (NLP), and displaying
      charts and dashboards of group information. Utilized technologies such as
      Python, Pandas, NumPy, Plotly, and spaCy.
    `,
    url: `https://ernestmanheim.com.br`,
  },
]
</script>
