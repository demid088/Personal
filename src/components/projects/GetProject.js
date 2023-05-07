import projectsList from './projectsList'

function GetProject(id) {
  let result = 1

  for (const project of projectsList) {
    if (project.id === id) {
      result = project
      break
    }
  }

  return result
}

export default GetProject
