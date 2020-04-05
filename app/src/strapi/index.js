import strapiJSON from "./strapi"

const apiEndpoint = strapiJSON.API_ENDPOINT

class StrapiIntegration {

  constructor() {
    this.API_ENDPOINT = apiEndpoint
  }

  async login(identifier, password) {

      const body = {identifier: identifier, password: password}
      const data = await fetch(`${this.API_ENDPOINT}/auth/local`,
      {
          headers: {
              "Content-Type": "application/json"
          },
          method: 'POST',
          body: JSON.stringify(body)
      }).then(res => res.json())
      .then(data => data)
      return data
  }

  async add(model, newModel) {
    const data = await fetch(`${this.API_ENDPOINT}/${model}`, 
      {
        method: 'POST',
        body: JSON.stringify(newModel)
            
      }).then(res => res.json())
      .then(data => data)
      return data
  }

  async update(model, modelID, updatedModel) {
    const data = await fetch(`${this.API_ENDPOINT}/${model}/${modelID}`, 
    {
      method: 'PUT',
      body: JSON.stringify(updatedModel)
    })
    .then(res => {console.log(res);return res.json()})
    .then(data => {console.log(data);return data})
    return data
  }

  async delete(model, modelID) {
    const data = await fetch(`${this.API_ENDPOINT}/${model}/${modelID}`,
    {
      method: 'DELETE',
    }).then(res => res.json())
    .then(data => data)
    return data
  }
}

export default new StrapiIntegration()