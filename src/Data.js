const getData = {
    async getJobs(term,location,type) {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=${term}&location=${location}&type=${type}`)
        const jsonRespone = await response.json()
        return jsonRespone
    }
}

export {
    getData as Data
}