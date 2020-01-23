class GoodsItem {
    constructor(tittle='Not defined',price=0,img=''){
        this.tittle=tittle;
        this.price=price;
        this.img=img;
    }
    render(){
        return `<div class="goods-item">
        <img src="${img}" alt="alt">
            <h3>${tittle}</h3>
            <p>${price}</p>
            <button class="ja-add-to-cart">Add item</button>
        </div>`;
    }
}

class GoodsList {
    constructor (container){
        this.goods=[];
        this.container=document.querySelector(container);
    }
    initListeners(){
        const buttons=[...this.container.querySelectorAll('.js-add-to-cart')];
        buttons.forEach(button=>{
            button.addEventListener('click',(event) =>{
                const goodId=event.target.parentElemets.getAttribute('data-id');
                this.addToCart(goodId);
            })
        })
    }    
    fetchGoods(){
        this.goods=[
            {id:1,tittle:"HTC Vive",price:45000,img:'https://via.placeholder.com/150'},
            {id:2,tittle:"HTC Vive Cosmos",price:60000,img:'https://via.placeholder.com/150'},
            {id:3,tittle:"HTC Vive Pro",price:90000,img:'https://via.placeholder.com/150'},
            {id:4,tittle:"Oculus Rift",price:40000,img:'https://via.placeholder.com/150'},
            {id:5,tittle:"DJI Goodies",price:37000,img:'https://via.placeholder.com/150'},
        ]
    }
    addToCart(){
        const good=this.findGood(goodId);
        console.log('add to cart',this.name);
    }
    findGood(id){
        return this.goods,find(good=>good.id===id);
    }
    render(){
        let listHtml='';
        this.goods.forEach(good=>{
            const goodItem=new GoodsItem(good.tittle,good.price,good.img);
            listHtml+=goodItem.render();
        });
        this.container.innerHTML=listHtml;
    }
}

const list=new GoodsList('.goods-list');
list.fetchGoods();
list.render();