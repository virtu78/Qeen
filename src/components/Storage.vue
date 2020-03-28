<template>
    <div>
        <!-- table1 - content table -->
        <table>
            <tr v-for="(row, i) in table">
                <td draggable="true"
                    :key="j"
                    :data-row="i"
                    :data-ceil="i"
                    @drag.start="drag"
                    @dragover.prevent
                    @drop.stop="drop"
                    v-for="(item,  j) in row">
                    <div class='id' v-if="item"><span >{{item.id}}</span>
                        {{item.name}}
                    </div>
                </td>
            </tr>
        </table>
        
    </div>
</template>

<script>
 import _ from "lodash";
    export default {
        name: "Storage",
        props: [],
        data() {
            return {
               
                size: [8, 8],
                
                displayed: false,
               
                currentTarget: [],
                nextTarget: [],
                currentPosItem: {},
                
                 items:  [
                        {
                            id: 1,                            
                            name: "Money",
                            quantity: 167,
                            position_x: -1,
                            position_y: -1,
                            
                        },
                        {
                            id: 4,                           
                            name: "Queen",
                            quantity: 4,
                            position_x: 3,
                            position_y: 2,
                            
                        },
                        {
                            id: 3,                            
                            name: "Queen",
                            quantity: 1,
                            position_x: 0,
                            position_y: 0,                            
                        }

                    ]
                
            }
        },
        mounted() {
        },
        computed: {

            table: function () {
                const map = [];
                for (let x = 0; x < this.size[0]; x++) {
                    map.push(_.fill(Array(this.size[1]), null));
                }
                _.forEach(this.items, (item) => {
                    if (item.position_x !== -1 && item.position_y !== -1)
                        map[item.position_x][item.position_y] = item
                
                       
                    this.currentPosItem = item;
                    if (item.position_x !== -1 && item.position_y !== -1)
                        map[item.position_x][item.position_y] = this.currentPosItem;
                });
                return map;
            },

            money: function () {
                let money = _.find(this.items, (item) => item.item_id === Money);
                if (!money)
                    money = 0;
                return new Intl.NumberFormat().format(money.quantity);
            },
        },
        methods: {
          

            drag(event) {
                let target = event.target
                let i = target.dataset.row;
                let j = target.dataset.ceil;
                this.currentTarget = [j, i];
                //if (target.tagName != 'SPAN') return;
                  // console.log(target);
            },



            drop(event) {
                //if (cell.tagName != 'SPAN') return;
                

 

  
let cell = event.target ;
 let span = cell.closest('id');
//if (!span) return; // (2)

  
  //cell.innerHTML = cell.id
  console.log(span)


                
               // console.log(cell);
                let m = cell.parentNode.rowIndex;
                let n = cell.cellIndex;
                this.nextTarget = [m, n];
                this.currentPosItem.position_x = this.nextTarget[0];
                this.currentPosItem.position_y = this.nextTarget[1];
                console.log(this.currentPosItem);
            }
        },
    };
</script>

<style scoped>
    table {
        width: auto;
    }

    td {
        width: 40px;
        height: 40px;
        border: 1px solid #000;
    }

</style>