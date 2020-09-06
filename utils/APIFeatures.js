/* eslint-disable node/no-unsupported-features/es-syntax */
class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    let filterQueryObj = { ...this.queryString };
    const excludedFields = ['sort', 'limit', 'skip'];
    excludedFields.forEach(field => delete filterQueryObj[field]);
    let filterQueryString = JSON.stringify(filterQueryObj);
    filterQueryString = filterQueryString.replace(
      /\b(gt|gte|lt|lte)\b/g,
      match => `$${match}`
    );
    filterQueryObj = JSON.parse(filterQueryString);
    this.query = this.query.find(filterQueryObj);
    return this;
  }

  sort() {
    let sortString;
    if (this.queryString.sort) {
      sortString = this.queryString.sort.split(',').join(' ');
      this.query.sort(sortString);
    }
    return this;
  }

  paginate() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 50;
    const skip = (page - 1) * limit;
    this.query = this.query.limit(limit).skip(skip);
    return this;
  }
}
module.exports = APIFeatures;
