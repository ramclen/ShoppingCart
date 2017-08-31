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
        return this.spreadSheet.updateRow("page", `A${product.id+1}:C${product.id+1}`, row)
    }



    _rowToProduct([id, name, checked]){
        return {id:id-0, name, checked:checked==="TRUE"}
    }

    _productToRow({id, name, checked}) {
        return [id, name, checked ? "TRUE" : "FALSE"];
    }
}