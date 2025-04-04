const queryBuilder = (filters: object) => {
  const params = new URLSearchParams()
  Object.entries(filters).forEach(([key, value]) => {
    if (value !== null && value !== undefined && value !== '') {
      const safeValue = JSON.stringify(value)
      params.append(key, safeValue)
    }
  })
  return params.toString()
}

const urlSafe = (str: string) => encodeURIComponent(str)

export { queryBuilder, urlSafe }
