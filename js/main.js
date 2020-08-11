let dataBus = [
    { seat: 1, occupied: true },
    { seat: 2, occupied: false },
    { seat: 3, occupied: false },
    { seat: 4, occupied: true },
    { seat: 5, occupied: true },
    { seat: 6, occupied: false },
    { seat: 7, occupied: false },
    { seat: 8, occupied: false },
    { seat: 9, occupied: false },
    { seat: 10, occupied: true },
    { seat: 11, occupied: false },
    { seat: 12, occupied: false },
    { seat: 13, occupied: false },
    { seat: 14, occupied: false },
    { seat: 15, occupied: false },
    { seat: 16, occupied: false },
    { seat: 17, occupied: false },
    { seat: 18, occupied: false },
    { seat: 19, occupied: false },
    { seat: 20, occupied: false },
    { seat: 21, occupied: false },
    { seat: 22, occupied: false },
    { seat: 23, occupied: false },
    { seat: 24, occupied: false },
    { seat: 25, occupied: false },
    { seat: 26, occupied: true },
    { seat: 27, occupied: false },
    { seat: 28, occupied: true },
    { seat: 29, occupied: false },
    { seat: 30, occupied: false },
    { seat: 31, occupied: false },
    { seat: 32, occupied: false },
    { seat: 33, occupied: false },
    { seat: 34, occupied: false },
    { seat: 35, occupied: false },
    { seat: 36, occupied: false },
    { seat: 37, occupied: true },
    { seat: 38, occupied: false },
    { seat: 39, occupied: false },
    { seat: 40, occupied: false },
    { seat: 41, occupied: false },
    { seat: 42, occupied: false },
    { seat: 43, occupied: false },
    { seat: 44, occupied: false },
    { seat: 45, occupied: false },
    { seat: 46, occupied: false },
    { seat: 47, occupied: false },
    { seat: 48, occupied: false },
    { seat: 49, occupied: false },
    { seat: 50, occupied: false },
    { seat: 51, occupied: false },
    { seat: 52, occupied: false },
    { seat: 53, occupied: false },
    { seat: 54, occupied: false }
];

dataBus.forEach(seat => {
    if (seat.occupied) {
        document.querySelector(`#seat-${seat.seat}`).disabled = true;
        document.querySelector(`label[data-seat_num='${seat.seat}']`)
            .classList.add("occupied")
    }
});

let paxComponent = Vue.extend({
    template: `
    <div class="card-body">
    <h5 class="card-title">Passengers</h5>
    <div class="alert alert-info">
      <p class="card-text">Write here the Passengers info.</p>
    </div>
    <div class="col-xs-12">
      <!-- <button type="button" id="add-blocked" class="btn btn-success btn-xs" @click="addPassenger"><i
          class="fa fa-plus"></i></button> -->
      <hr>
      <div class="row" v-for="pax in paxes">
        <div class="col-md-4 col-xs-12 col-sm-12 form-group">
          <input type="text" class="form-control" :name="'pax[' + pax.index + '][name]'"
            placeholder="Name" v-model="pax.name">
        </div>
        <div class="col-md-4 col-xs-12 col-sm-12 form-group">
          <input class="form-control" :name="'pax[' + pax.index + '][category]'"
            placeholder="Category" id="category" v-model="pax.category">
        </div>
        <div class="col-md-4 col-xs-12 col-sm-12 form-group">
            <input class="form-control" :name="'pax[' + pax.index + '][seat]'"
            placeholder="seat" id="seat" v-model="pax.seat">
        </div>
        <div class="col-md-2 col-xs-12 col-sm-12 form-group">
          <button type="button" class="btn btn-danger" @click="deletePax(pax)">
            <i class="fa fa-trash"></i>
          </button>
        </div>
        <hr>
      </div>
    </div>
  </div>
    `,
    data: function () {
        return {
            paxes: []
        }
    },
    methods: {
        addPax: function (seat) {
            console.log(`Seat: ${seat}`);
            const size = this.paxes.length;

            this.paxes.push({
                'index': size,
                'name': '',
                'category': '',
                'seat': seat
            });
        },
        deletePax: function (pax) {
            const index = this.paxes.indexOf(pax);
            this.paxes.splice(index, 1);
            this.reOrdering();
        },
        reOrdering: function () {
            this.paxes.forEach((pax, index) => {
                pax.index = index;
            });
        }
    }
});

let vm = new Vue({
    el: '#pax-form',
    components: {
        'pax-component': paxComponent
    }
});


const cbox = document.querySelectorAll(`input[type="checkbox"]`);

for (let i = 0; i < cbox.length; i++) {
    cbox[i].addEventListener("change", function () {
        console.log(this.dataset.seat_num);

        //TODO: Only when checked is true.
        vm.$refs.foo.addPax(this.dataset.seat_num);
    });
}
