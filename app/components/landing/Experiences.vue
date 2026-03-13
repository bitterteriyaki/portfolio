<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui'

const items: TimelineItem[] = [
  {
    date: 'Sep 2024 - Present',
    title: 'IT Technician at Caixa Econômica Federal',
    tags: [
      'Java',
      'C#',
      'Apache Struts',
      'ASP.NET',
      'JavaScript',
      'TypeScript',
      'JSP',
      'Angular',
      'HTML/CSS',
      'IBM Db2',
      'Azure Cosmos DB',
      'SQL Server',
      'Azure DevOps',
      'Jenkins',
      'Git',
    ],
    avatar: { size: 'xs' },
    description: `
      Development of internal and external software, fix bugs and
      vulnerabilities, maintain legacy code, develop new features and
      applications, deploy applications using Jenkins and Azure DevOps and
      implement code improvements, such as automated tests and documentation.
      Active participation in the architecture and design of new product
      systems, participating in the development and configuration of the
      applications infrastructure. Mentoring new team members with project
      onboarding.
    `,
    urls: [
      {
        label: 'Reforma Casa Brasil',
        href: 'https://reformacasabrasil.caixa.gov.br/',
      },
    ],
  },
  {
    date: 'Jul 2024 - Sep 2024',
    title: 'SWE Intern at Tribunal de Contas da União',
    tags: [
      'Kotlin',
      'Spring Boot',
      'TypeScript',
      'Angular',
      'HTML/CSS',
      'Oracle DB',
      'Jenkins',
      'Git',
    ],
    avatar: { size: 'xs' },
    description: `
      Development of internal softwares, fix bugs and vulnerabilities, deploy of
      the applications using Jenkins and implement code improvements such as
      automated tests and documentation.
    `,
  },
  {
    date: 'Jun 2022 - Dec 2022',
    title: 'Systems Developer at Tecnisys',
    tags: [
      'PHP',
      'JavaScript',
      'HTML/CSS',
      'PostgreSQL',
      'Grafana',
      'Jenkins',
      'Git',
    ],
    avatar: { size: 'xs' },
    description: `
      Development of new pages and features, fix bugs and vulnerabilities,
      creation of dashboards with Grafana, deployment of the application using
      Jenkins, and implementation of code improvements such as automated tests
      and documentation.
    `,
  },
]
</script>

<template>
  <UContainer
    class="
      mt-16
      flex
      flex-col
      items-center
      lg:grid
      lg:grid-flow-col
      lg:place-items-center
      lg:items-stretch
    "
  >
    <h2 class="text-3xl font-bold mb-4 dark:text-slate-300">
      Experiences
    </h2>
    <div class="flex flex-col gap-4">
      <UTimeline :items="items" class="max-w-xl">
        <template #description="{ item }">
          <p class="text-sm text-gray-600 dark:text-gray-400">
            {{ item.description }}
          </p>
          <div class="flex flex-wrap gap-2 mt-2">
            <UBadge
              v-for="tag in item.tags"
              :key="tag"
              variant="soft"
              size="md"
              class="rounded-full"
            >
              {{ tag }}
            </UBadge>
          </div>
        </template>
      </UTimeline>
    </div>
  </UContainer>
</template>
