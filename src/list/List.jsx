function List(){
    const fruits=[  {id:1,name:"orange",calories:95},
                    {id:2,name:'apple',calories:45},
                    {id:3,name:'grapes',calories:26},
                    {id:4,name:'Bannana',calories:34},
                    {id:5,name:'pineapple',calories:67}]

        // fruits.sort((a,b)=>a.name.localeCompare(b.name)
        // fruits.sort((a,b)=>a.calories-b.calories)

    // const lowcalfruits=fruits.filter(fruits=> fruits.calories<50)
    const highcalfruits=fruits.filter(fruits=>fruits.calories>50)


        

    const ListItems=highcalfruits.map(highcalfruits=> <li key={highcalfruits.id}>{highcalfruits.name}:&nbsp;
                                            <b>{highcalfruits.calories}</b></li>)

    return(<ol>{ListItems}</ol>)

}
export default List