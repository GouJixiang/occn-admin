<template>
  <n-card title="服务器管理">
    <template #header-extra>
      <n-space>
        <n-button type="primary">新增</n-button>
      </n-space>
    </template>
    <template #default>
      <n-space>
        <n-card hoverable class="hardware-card">
          <template #header>
            <n-space>
              <n-el tag="span">香港-腾讯云</n-el>
              <n-badge dot processing color="green"></n-badge>
            </n-space>
          </template>
          <template #header-extra>
            <n-button text>
              <template #icon>
                <n-icon>
                  <TerminalOutline />
                </n-icon>
              </template>
            </n-button>
          </template>
          <template #default>
            <n-form
              disabled
              size="small"
              label-placement="left"
              label-width="auto"
            >
              <n-form-item label="IP">
                <n-input value="43.155.118.67" readonly />
              </n-form-item>
              <n-form-item label="运营商">
                <n-input value="腾讯云" readonly />
              </n-form-item>
              <n-form-item label="资费状态">
                <n-input value="安全" readonly />
              </n-form-item>
              <n-form-item label="备注">
                <n-input type="textarea" value="Xray,Nginx" readonly />
              </n-form-item>
            </n-form>
            <n-space class="my-4" justify="center">
              <n-progress type="circle" status="success" :percentage="20">
                <n-el style="text-align: center">CPU占用 20%</n-el>
              </n-progress>
              <n-progress type="circle" status="warning" :percentage="56">
                <n-el style="text-align: center">硬盘占用 56%</n-el>
              </n-progress>
              <n-progress type="circle" status="success" :percentage="90">
                <n-el style="text-align: center">剩余流量 858MB</n-el>
              </n-progress>
            </n-space>
          </template>
          <template #footer>
            <n-space size="large" justify="end">
              <n-button text>
                <template #icon>
                  <n-icon>
                    <CubeSharp />
                  </n-icon>
                </template>
              </n-button>
              <n-button text>
                <template #icon>
                  <n-icon>
                    <FileTextFilled />
                  </n-icon>
                </template>
              </n-button>
              <n-button text>
                <template #icon>
                  <n-icon>
                    <EditFilled />
                  </n-icon>
                </template>
              </n-button>
              <n-button text type="error">
                <template #icon>
                  <n-icon>
                    <DeleteFilled />
                  </n-icon>
                </template>
              </n-button>
            </n-space>
          </template>
        </n-card>

        <n-card hoverable class="hardware-card">
          <template #header>
            <n-space>
              <n-el tag="span">成都-腾讯云</n-el>
              <n-badge dot processing color="green"></n-badge>
            </n-space>
          </template>
          <template #header-extra>
            <n-button text>
              <template #icon>
                <n-icon>
                  <TerminalOutline />
                </n-icon>
              </template>
            </n-button>
          </template>
          <template #default>
            <n-form
              disabled
              size="small"
              label-placement="left"
              label-width="auto"
            >
              <n-form-item label="IP">
                <n-input value="43.155.118.67" readonly />
              </n-form-item>
              <n-form-item label="运营商">
                <n-input value="腾讯云" readonly />
              </n-form-item>
              <n-form-item label="资费状态">
                <n-input value="安全" readonly />
              </n-form-item>
              <n-form-item label="备注">
                <n-input type="textarea" value="穿透代理服务器" readonly />
              </n-form-item>
            </n-form>
            <n-space class="my-4" justify="center">
              <n-progress type="circle" status="success" :percentage="10">
                <n-el style="text-align: center">CPU占用 10%</n-el>
              </n-progress>
              <n-progress type="circle" status="success" :percentage="20">
                <n-el style="text-align: center">硬盘占用 20%</n-el>
              </n-progress>
              <n-progress type="circle" status="warning" :percentage="32">
                <n-el style="text-align: center">剩余流量 342MB</n-el>
              </n-progress>
            </n-space>
          </template>
          <template #footer>
            <n-space size="large" justify="end">
              <n-button text>
                <template #icon>
                  <n-icon>
                    <CubeSharp />
                  </n-icon>
                </template>
              </n-button>
              <n-button text>
                <template #icon>
                  <n-icon>
                    <FileTextFilled />
                  </n-icon>
                </template>
              </n-button>
              <n-button text>
                <template #icon>
                  <n-icon>
                    <EditFilled />
                  </n-icon>
                </template>
              </n-button>
              <n-button text type="error">
                <template #icon>
                  <n-icon>
                    <DeleteFilled />
                  </n-icon>
                </template>
              </n-button>
            </n-space>
          </template>
        </n-card>

        <n-card hoverable class="hardware-card">
          <template #header>
            <n-space>
              <n-el tag="span">硅谷-阿里云</n-el>
              <n-badge dot processing color="red"></n-badge>
            </n-space>
          </template>
          <template #header-extra>
            <n-button text>
              <template #icon>
                <n-icon>
                  <TerminalOutline />
                </n-icon>
              </template>
            </n-button>
          </template>
          <template #default>
            <n-form
              disabled
              size="small"
              label-placement="left"
              label-width="auto"
            >
              <n-form-item label="IP">
                <n-input value="43.155.118.67" readonly />
              </n-form-item>
              <n-form-item label="运营商">
                <n-input value="阿里云" readonly />
              </n-form-item>
              <n-form-item label="资费状态">
                <n-input value="过期" readonly />
              </n-form-item>
              <n-form-item label="备注">
                <n-input type="textarea" value=" " readonly />
              </n-form-item>
            </n-form>
            <n-space class="my-4" justify="center">
              <n-progress type="circle" status="success" :percentage="0">
                <n-el style="text-align: center">CPU占用 0%</n-el>
              </n-progress>
              <n-progress type="circle" status="warning" :percentage="0">
                <n-el style="text-align: center">硬盘占用 0%</n-el>
              </n-progress>
              <n-progress type="circle" status="success" :percentage="0">
                <n-el style="text-align: center">剩余流量 0MB</n-el>
              </n-progress>
            </n-space>
          </template>
          <template #footer>
            <n-space size="large" justify="end">
              <n-button text>
                <template #icon>
                  <n-icon>
                    <CubeSharp />
                  </n-icon>
                </template>
              </n-button>
              <n-button text>
                <template #icon>
                  <n-icon>
                    <FileTextFilled />
                  </n-icon>
                </template>
              </n-button>
              <n-button text>
                <template #icon>
                  <n-icon>
                    <EditFilled />
                  </n-icon>
                </template>
              </n-button>
              <n-button text type="error">
                <template #icon>
                  <n-icon>
                    <DeleteFilled />
                  </n-icon>
                </template>
              </n-button>
            </n-space>
          </template>
        </n-card>
      </n-space>
    </template>
  </n-card>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.hardware-card {
  width: 500px;

  .card-p {
    font-weight: bolder;
    color: var(--primary-color);
  }
}
</style>
