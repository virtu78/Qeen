<template>
    <div>
        <!-- table1 - content table -->
        <table ID='tbl'>
            <tr v-for="(row, i) in table">
                <td draggable="true"
                    :key="j"
                    :data-row="i"
                    :data-ceil="i"
                    @drag.start="drag"
                    @dragover.prevent
                    @drop.stop="drop"
                    v-for="(item,  j) in row">
                    <div id='item' v-if="item">
                    <div id='id'>{{item.id}}</div><br>{{item.name}}
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
                currentItem: [],              
                 items:  [
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

        computed: {

            table: function () {
                const map = [];
                for (let x = 0; x < this.size[0]; x++) {
                    map.push(_.fill(Array(this.size[1]), null));
                }
                _.forEach(this.items, (item) => {
                    if (item.position_x !== -1 && item.position_y !== -1)
                        map[item.position_x][item.position_y] = item; 

                    this.currentPosItem = item;
                 
                    this.currentItem.push(this.currentPosItem)
                    
                    //console.log(this.currentItem)
                });
                return map;
            },

        },
        methods: {          

            drag(event) {
                let target = event.target
                let i = target.dataset.row;
                let j = target.dataset.ceil;
                this.currentTarget = [j, i];
               //if (cell.tagName != 'SPAN') return;            
                 
                 
            },
            drop(event) {
               //var v=this.currentItem.slice(0, 2);
                let sheet=document.querySelector("#id");
                var id = sheet.textContent; 
                console.log(id);            

                this.currentPosItem= this.currentItem.find(itm => itm.id == id)   
                console.log(this.currentPosItem) 
                //this.currentPosItem=t[0] ;
                //console.log(this.currentPosItem) 
                let target = event.target              
                            // console.log(cell);
                let m = target.parentNode.rowIndex;
                let n = target.cellIndex;
                this.nextTarget = [m, n];
                this.currentPosItem.position_x = m;
                this.currentPosItem.position_y = n;
                        //console.log(this.currentPosItem.id);
                this.currentItem.length=0;
                  
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
 .iten{
    
 }
  .id{
    background-color: yellow;
 }
</style>