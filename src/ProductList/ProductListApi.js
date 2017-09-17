import GSpreadSheets from "../GSpreadSheets";

export default class ProductListApi{
    constructor(){
        this.spreadSheet = GSpreadSheets.instance();
    }

    getAll(){
        return this.spreadSheet.getDataFrom("page", "A2:E")
            .then(result => result.values)
            .then(values => values.map(this._rowToProduct));
    }

    add(product){
        let row = this._productToRow(product);
        return this.spreadSheet.addRow("page", "A2:E", row);
    }

    update(product){
        let row = [product.id, product.name, product.checked?"TRUE":"FALSE"];
        return this.spreadSheet.updateRows("page", `A${product.id+1}:C${product.id+1}`, [row])
    }

    remove(product){
        return this.getAll()
            .then(products => {
                products.splice(products.findIndex(_product => _product.id == product.id), 1);
                return products;
            })
            .then(products=>{
                return products.map((_product, index)=>{
                    _product.id = index+1;
                    return _product;
                })
            })
            .then(products => {
                products[products.length] = undefined;
                return this.updateList(products, [products[0].id + 1, products[products.length - 2].id + 2]);
            })
    }

    updateList(products, customRange){
        let rows = products.map(product => product?this._productToRow(product):['','','']);
        return this.spreadSheet.updateRows("page", this._makeRange(customRange, products), rows);
    }

    _makeRange(products, customRange) {
        if (customRange)
            return `A${customRange[0]}:C${customRange[1]}`;
        return `A${products[0].id + 1}:C${products[products.length - 1].id + 1}`;
    }

    _rowToProduct([id, name, checked]){
        return {id:id-0, name, checked:checked==="TRUE"}
    }

    _productToRow({id, name, checked}) {
        return [id, name, checked ? "TRUE" : "FALSE"];
    }
}