function Result(json_data) {
    this.params_fields = Object.getOwnPropertyNames(json_data).filter( prop => !prop.includes('Pitts') && !prop.includes('MSLS') );
    this.pitts_trained_fields = Object.getOwnPropertyNames(json_data).filter( prop => prop.includes('Pitts_'));
    this.msls_trained_fields = Object.getOwnPropertyNames(json_data).filter( prop => prop.includes('MSLS_'));

    this.pitts_trained = this.pitts_trained_fields.map( name => json_data[name]);
    this.msls_trained = this.msls_trained_fields.map( name => json_data[name]);
    this.params = this.params_fields.map( name => json_data[name]);

    this.pitts_trained_fields = this.pitts_trained_fields
                                .map( prop => prop.replace('Pitts_', ''));
    this.msls_trained_fields = this.msls_trained_fields
                                .map( prop => prop.replace('MSLS_', ''));   
}

function ResultsList(json_list){
    this.results = json_list.map( json_el => new Result(json_el));
}

function AllTables(folder){
    const context = require.context('./tables', true, /.json$/);
    this.all = {};
    this.table_list = [];
    context.keys().forEach((key) => {
        const fileName = key.replace('./', '');
        const resource = require(`./tables/${fileName}`);
        const namespace = fileName.replace('.json', '');
        if (!(namespace.includes('dataset'))){ 
            //all[namespace] = JSON.parse(JSON.stringify(resource));
            this.all[namespace] = new ResultsList(JSON.parse(JSON.stringify(resource)));
            this.table_list.push(namespace);
        }
    });
    console.log(this.all);
}

function DatasetRow(json_el){
    this.fields = Object.getOwnPropertyNames(json_el);
    this.data = Object.values(json_el);
}

function DatasetTable(json_list){
    this.data = json_list.map( json_el => new DatasetRow(json_el));
}

export { AllTables, DatasetTable };