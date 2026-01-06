import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(res => setProjects(res.data))
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map(p => (
          <div key={p.id} className="border p-4 rounded shadow">
            <h2 className="font-bold mb-2">{p.title}</h2>
            <p>{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
