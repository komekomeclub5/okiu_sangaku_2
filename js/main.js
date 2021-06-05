new Vue({
    el: '#app',

    data: {
      update: [],
      events: [],
      officerMember: [],
      corpMember: [],
      indiMember: []
    },
    created: function () {
      axios.get('/data/list_update.json').then(function (response) {
          // 取得完了したらlistリストに代入
          this.update = response.data
      }.bind(this)).catch(function (e) {
          console.error(e)
      }),
      axios.get('/data/list_events.json').then(function (response) {
              // 取得完了したらlistリストに代入
          this.events = response.data
      }.bind(this)).catch(function (e) {
          console.error(e)
      }),
      axios.get('/data/list_officer_member.json').then(function (response) {
        // 取得完了したらlistリストに代入
          this.officerMember = response.data
      }.bind(this)).catch(function (e) {
          console.error(e)
      }),
      axios.get('/data/list_corporation_member.json').then(function (response) {
        // 取得完了したらlistリストに代入
          this.corpMember = response.data
      }.bind(this)).catch(function (e) {
          console.error(e)
      })
      axios.get('/data/list_individual_member.json').then(function (response) {
        // 取得完了したらlistリストに代入
          this.indiMember = response.data
      }.bind(this)).catch(function (e) {
          console.error(e)
      })
    }
})
