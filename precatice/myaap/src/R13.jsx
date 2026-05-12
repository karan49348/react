import React, { useState } from 'react'

const R13 = ({ collegeData = {} }) => {

  const [form, setForm] = useState({
    state: '',
    college: '',
    course: '',
    branch: '',
    section: '',
    class: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === 'state') {
      setForm({ state: value, college: '', course: '', branch: '', section: '', class: '' })
    } else if (name === 'college') {
      setForm({ ...form, college: value, course: '', branch: '', section: '', class: '' })
    } else if (name === 'course') {
      setForm({ ...form, course: value, branch: '', section: '', class: '' })
    } else if (name === 'branch') {
      setForm({ ...form, branch: value, section: '', class: '' })
    } else if (name === 'section') {
      setForm({ ...form, section: value, class: '' })
    } else {
      setForm({ ...form, [name]: value })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <select name='state' value={form.state} onChange={handleChange}>
          <option value="">pls State</option>
          {Object.keys(collegeData || {}).map((state) => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>

        <select name='college' value={form.college} onChange={handleChange} disabled={!form.state}>
          <option value="">College</option>
          {form.state &&
            Object.keys(collegeData[form.state]?.colleges || {}).map((college) => (
              <option key={college} value={college}>{college}</option>
            ))}
        </select>

        <select name='course' value={form.course} onChange={handleChange}>
          <option value="">Select course</option>
          {form.state && form.college &&
            Object.keys(collegeData[form.state]?.colleges?.[form.college]?.courses || {}).map((course) => (
              <option key={course} value={course}>{course}</option>
            ))}
        </select>

        <select name='branch' value={form.branch} onChange={handleChange}>
          <option value="">Select Branch</option>
          {form.state && form.college && form.course &&
            Object.keys(collegeData[form.state]?.colleges?.[form.college]?.courses?.[form.course]?.branches || {}).map((branch) => (
              <option key={branch} value={branch}>{branch}</option>
            ))}
        </select>

        <select name='section' value={form.section} onChange={handleChange}>
          <option value="">Select Section</option>
          {form.state && form.college && form.course && form.branch &&
            Object.keys(
              collegeData[form.state]?.colleges?.[form.college]?.courses?.[form.course]?.branches?.[form.branch]?.sections || {}
            ).map((section) => (
              <option key={section} value={section}>{section}</option>
            ))}
        </select>

        <select name='class' value={form.class} onChange={handleChange}>
          <option value="">Select Class</option>
          {form.state && form.college && form.course && form.branch && form.section &&
            (collegeData[form.state]?.colleges?.[form.college]?.courses?.[form.course]?.branches?.[form.branch]?.sections?.[form.section] || []).map((cls) => (
              <option key={cls} value={cls}>{cls}</option>
            ))}
        </select>

        <button type='submit'>submit</button>

      </form>
    </div>
  )
}

export default R13