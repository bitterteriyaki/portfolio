<template>
  <div
    class="
      flex
      flex-col
      gap-4
      items-center
      lg:grid
      lg:grid-flow-col
      lg:place-content-center
      lg:items-stretch
      lg:gap-8
    "
  >
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
    <ul class="flex flex-col gap-4 group/list">
      <li v-for="job, idx in jobs" :key="idx">
        <ExperienceCard :job="job" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { Job } from './ExperienceCard.vue'

const jobs: Job[] = [
  {
    title: 'Banking Technician (IT)',
    startDate: 'Sep 2024',
    endDate: 'Present',
    company: 'Caixa Econômica Federal',
    description: `
      Development of internal projects, fix bugs and vulnerabilities, deploy of
      the application using Jenkins and implement code improvements such as
      automated tests and documentation.
    `,
    url: `https://www.caixa.gov.br`,
    techs: [
      'Java',
      'JavaScript',
      'JSP',
      'HTML/CSS',
      'IBM Db2',
      'Git',
    ],
  },
  {
    title: 'Software Developer Intern',
    startDate: 'Jul 2024',
    endDate: 'Sep 2024',
    company: 'Tribunal de Contas da União',
    description: `
      Development of internal projects, fix bugs and vulnerabilities, deploy of
      the application using Jenkins and implement code improvements such as
      automated tests and documentation.
    `,
    url: `https://www.tcu.gov.br`,
    techs: [
      'Kotlin',
      'JavaScript',
      'Angular',
      'HTML/CSS',
      'Oracle DB',
      'Jenkins',
      'Git',
    ],
  },
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
      'HTML/CSS',
      'PostgreSQL',
      'Grafana',
      'Jenkins',
      'Git',
    ],
  },
]
</script>
