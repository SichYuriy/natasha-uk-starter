let axios = require('axios');

const EXTRACT_NAMES_URL = '/extract-names-uk';
const EXTRACT_PERSONS_URL = '/extract-persons-uk';
const EXTRACT_DATES_URL = '/extract-dates-uk';
const EXTRACT_LOCATIONS_URL = '/extract-locations-uk';

class NatashaUkStarter {
    constructor(natashaUkUrl) {
        this.natashaUkUrl = natashaUkUrl;
    }

    extractNames(articles) {
        return axios.post(this.natashaUkUrl + EXTRACT_NAMES_URL, articles)
            .then(response => response.data);
    }

    extractPersons(articles) {
        return axios.post(this.natashaUkUrl + EXTRACT_PERSONS_URL, articles)
            .then(response => response.data);
    }

    extractDates(articles) {
        return axios.post(this.natashaUkUrl + EXTRACT_DATES_URL, articles)
            .then(response => response.data);
    }

    extractLocations(articles) {
        return axios.post(this.natashaUkUrl + EXTRACT_LOCATIONS_URL, articles)
            .then(response => response.data);
    }
}

module.exports = NatashaUkStarter;

