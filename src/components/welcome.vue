<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="16"><div class="grid-content1 bg-purple1">
        <h1>欢迎登录{ 新风尚 }</h1>
      </div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">

          <el-row :gutter="20">
            <el-col :span="8"><div class="grid-content bg-purple">
              <el-col :span="3">
                <div class="iys">
                  <img src="../assets/img/sy.png" alt="" >
                </div>
              </el-col>
            </div></el-col>
            <el-col :span="16"><div class="grid-content bg-purple">
              <el-col><div class="zt">收银台</div></el-col>
              <el-col><div class="zt1">今日单数：0 单</div></el-col>

            </div></el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="6"><div class="grid-content bg-purple">
        <el-row :gutter="20">
          <el-col :span="8"><div class="grid-content bg-purple">
            <el-col :span="3">
              <div class="iys">
                <img src="../assets/img/hy.png" alt="" >
              </div>
            </el-col>
          </div></el-col>
          <el-col :span="16"><div class="grid-content bg-purple">

            <el-col><div class="zt">会员中心</div></el-col>
            <el-col><div class="zt1">会员数量：15 人</div></el-col>
          </div></el-col>
        </el-row>
      </div></el-col>

      <el-col :span="6">
        <div class="grid-content bg-purple">

          <el-row :gutter="20">
            <el-col :span="8"><div class="grid-content bg-purple">
              <el-col :span="3">
                <div class="iys">
                  <img src="../assets/img/kc.png" alt="" >
                </div>
              </el-col>
            </div></el-col>
            <el-col :span="16"><div class="grid-content bg-purple">

              <el-col><div class="zt">库存中心</div></el-col>
              <el-col><div class="zt1">商品数量：10 个</div></el-col>

            </div></el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">

          <el-row :gutter="20">
            <el-col :span="8"><div class="grid-content bg-purple">
              <el-col :span="3">
                <div class="iys">
                  <img src="../assets/img/cw.png" alt="" >
                </div>
              </el-col>
            </div></el-col>
            <el-col :span="16"><div class="grid-content bg-purple">

              <el-col><div class="zt">财务中心</div></el-col>
              <el-col><div class="zt1">今日营收：0 元</div></el-col>

            </div></el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">

          <el-row :gutter="20">
            <el-col :span="8"><div class="grid-content bg-purple">
              <el-col :span="3">
                <div class="iys">
                  <img src="../assets/img/sj.png" alt="" >
                </div>
              </el-col>
            </div></el-col>
            <el-col :span="16"><div class="grid-content bg-purple">
              <el-col><div class="zt">数据中心</div></el-col>
              <el-col><div class="zt1">店面业绩：0 元</div></el-col>

            </div></el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">

          <el-row :gutter="20">
            <el-col :span="8"><div class="grid-content bg-purple">
              <el-col :span="3">
                <div class="iys">
                  <img src="../assets/img/yx.png" alt="" >
                </div>
              </el-col>
            </div></el-col>
            <el-col :span="16"><div class="grid-content bg-purple">

              <el-col><div class="zt">营销中心</div></el-col>
              <el-col><div class="zt1">括客人数：0 人</div></el-col>

            </div></el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>

  </div>


</template>

<script>
export default {
}

</script>
<style lang='less' scoped>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple1 {
    background: rgba(255, 255, 255, 0);
    color: rgba(111, 122, 106, 0.98);
  }
  .bg-purple {
    background: rgba(255, 255, 255, 0.62);
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content1 {
    border-radius: 4px;
    min-height: 36px;
  }
  .iys{
    margin-left: 10px;
    margin-top: 15px;
  }
  .zt{
    color: #000000;
    margin-top: 20px;

  }
  .zt1{
    color: rgba(0, 0, 0, 0.48);
    margin-top: 20px;

  }

  .grid-content {
    border-radius: 4px;
    min-height: 100px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

</style>
