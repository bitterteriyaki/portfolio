<template>
  <div
    class="
      flex
      flex-col
      gap-4
      sm:grid
      sm:grid-flow-col
      sm:place-content-center
      sm:gap-8
    "
  >
    <h2 class="text-4xl font-black text-center">
      My Experience
    </h2>
    <div
      v-if="isDesktopOrTablet"
      class="
        w-1
        rounded
        bg-gradient-to-b
        from-transparent
        to-slate-800
        to-50%
      "
    />
    <div class="flex flex-col gap-4 group/list">
      <ExperienceCard
        v-for="job, idx in jobs"
        :key="idx"
        :job="job"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
export type Job = {
  title: string
  startDate: string
  endDate: string
  company: string
  description: string
  url: string
  techs: string[]
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
      and documentation.
    `,
    url: `https://www.tecnisys.com.br`,
    techs: [
      'PHP',
      'JavaScript',
      'PostgreSQL',
      'HTML/CSS',
      'Grafana',
      'Git',
    ],
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
      charts and dashboards of group information.
    `,
    url: `https://ernestmanheim.com.br`,
    techs: [
      'Python',
      'Pandas',
      'NumPy',
      'Plotly',
      'spaCy',
      'Git',
    ],
  },
]

const { isDesktopOrTablet } = useDevice()
</script>
