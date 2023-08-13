<template>
  <n-card title="应用管理">
    <n-grid :y-gap="12" :cols="1">
      <n-grid-item> </n-grid-item>
      <n-grid-item>
        <n-space justify="end" :size="12">
          <n-button type="primary">新增</n-button>
          <n-button type="primary">导出</n-button>
          <n-button type="primary">删除</n-button>
        </n-space>
      </n-grid-item>
      <n-grid-item>
        <n-data-table
          :data="data"
          :columns="columns"
          :pagination="paginationReactive"
        />
      </n-grid-item>
    </n-grid>
  </n-card>
</template>

<script lang="ts" setup>
import { h, reactive } from 'vue'
import { DataTableColumns, NButton, NSpace, NTag, NBadge } from 'naive-ui'

interface AppConfigVO {
  id: string
  name: string
  host: string
  port: string
  tag: string
  status: string
}

const paginationReactive = reactive({
  page: 2,
  pageSize: 5,
  showSizePicker: true,
  pageSizes: [3, 5, 7],
  onChange: (page: number) => {
    paginationReactive.page = page
  },
  onUpdatePageSize: (pageSize: number) => {
    paginationReactive.pageSize = pageSize
    paginationReactive.page = 1
  }
})

const createColumns = ({
  editApp,
  viewApp
}: {
  editApp: (rowData: AppConfigVO) => void
  viewApp: (rowData: AppConfigVO) => void
}): DataTableColumns<AppConfigVO> => {
  return [
    {
      type: 'selection'
    },
    {
      title: '序号',
      key: 'id',
      align: 'center',
      render: (_, index) => {
        return `${index + 1}`
      }
    },
    {
      title: '名称',
      key: 'name',
      align: 'center'
    },
    {
      title: '地址',
      key: 'host',
      align: 'center'
    },
    {
      title: '端口',
      key: 'port',
      align: 'center'
    },
    {
      title: '状态',
      key: 'status',
      align: 'center',
      render(row) {
        let status = 'warning'
        switch (row.status) {
          case 'running':
            status = 'success'
            break
          case 'stop':
            status = 'warning'
            break
          case 'error':
            status = 'error'
            break
        }
        return h(NBadge, {
          dot: true,
          processing: true,
          type: status
        })
      }
    },
    {
      title: '标签',
      key: 'tag',
      align: 'center',
      render(row) {
        return row.tag?.split(',').map((tag) => {
          return h(
            NTag,
            {
              style: {
                marginRight: '6px'
              },
              type: 'info',
              bordered: false
            },
            {
              default: () => tag
            }
          )
        })
      }
    },
    {
      title: '操作',
      key: 'actions',
      align: 'center',
      render(row) {
        return [
          h(NSpace, { justify: 'center' }, () => [
            h(
              NButton,
              {
                strong: true,
                tertiary: true,
                size: 'small',
                type: 'primary',
                onClick: () => editApp(row)
              },
              { default: () => '编辑' }
            ),
            h(
              NButton,
              {
                strong: true,
                tertiary: true,
                size: 'small',
                type: 'error',
                onClick: () => viewApp(row)
              },
              { default: () => '预览' }
            )
          ])
        ]
      }
    }
  ]
}

const data: AppConfigVO[] = reactive<AppConfigVO[]>([
  {
    id: '1',
    name: 'AI OCCN',
    host: 'ai.occn.top',
    port: '80,443',
    tag: 'AI,ChatGPT',
    status: 'running'
  },
  {
    id: '2',
    name: 'DDNS-GO',
    host: 'ddns.occn.top',
    port: '80',
    tag: '网络,内网穿透',
    status: 'error'
  },
  {
    id: '3',
    name: 'QT-Box',
    host: 'docs.occn.top',
    port: '80,443',
    tag: 'C++,QT,桌面应用',
    status: 'stop'
  }
])

const columns = createColumns({
  editApp(rowData) {
    window.$message?.info('send mail to ' + rowData.host)
  },
  viewApp(rowData) {
    window.$message?.info('send mail to ' + rowData.host)
  }
})
</script>

<style scoped lang="scss"></style>
