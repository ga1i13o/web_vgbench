function Result(json_data) {
    this.params_fields = Object.getOwnPropertyNames(json_data).filter( prop => !prop.includes('Pitts') && !prop.includes('MSLS') );
    this.pitts_trained_fields = Object.getOwnPropertyNames(json_data).filter( prop => prop.includes('Pitts_'));
    this.msls_trained_fields = Object.getOwnPropertyNames(json_data).filter( prop => prop.includes('MSLS_'));

    this.pitts_trained = this.pitts_trained_fields.map( name => json_data[name]);
    this.msls_trained = this.msls_trained_fields.map( name => json_data[name]);
    this.params = this.params_fields.map( name => json_data[name]);

}

function ResultsList(json_list){
    this.results = json_list.map( json_el => new Result(json_el));
}

export { Result, ResultsList};