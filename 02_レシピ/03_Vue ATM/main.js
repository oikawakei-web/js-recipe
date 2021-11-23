const now = new Date()
new Vue({
  el: "#app",
  data: {
    nyuryokugaku: 0,
    zandaka: 0,
    zero:0,
    logs: [],
    osenai: true,
  },
  methods: {
    nyukin: function() {
      this.zandaka += Number(this.nyuryokugaku)
      this.logs.push(
        "日付:" + now,
        "操作:入金",
        "金額:" + this.nyuryokugaku + "円",
      )
    },
    syukin: function() {
      this.zandaka -= Number(this.nyuryokugaku)
      this.logs.push(
        "日付:" + now, 
        "操作:出金",
        "金額:" + this.nyuryokugaku + "円",
      )
    },
    osenaiMethod: function() {
      if (this.osenaikeisan == true) {
        this.osenai = true
      } else {
        this.osenai = false
      }
    },
  },
  computed: {
    osenaikeisan: function() {
      return this.zandaka < this.zero
    },
  },
})
