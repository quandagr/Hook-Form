import React from 'react'
import { useForm } from 'react-hook-form'

function SupabaseForm() {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = async (data) => {
    console.log(data)
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
    const response = await fetch(supabaseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseAnonKey
      },
      body: JSON.stringify(data)
    })
    // const result = await response.json()
    // console.log(result)
    reset() // Reset the form after submission
  }

  return (
    <div>SupabaseForm
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('projectName', {required: true})} placeholder='Name' />
            <input type="email" {...register('developerEmail', {required: true})} placeholder='Email' />
            <select {...register('priorityLevel', {required: true})}>
                <option value="">Select priority level</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            <input type="date" {...register('deploymentDate', {required: true})} />
            <input type= "number" {...register('versionNumber', {required: true})} placeholder='Version Number' />
            <input type="checkbox" {...register('isPublic', {required: true})} label='Is Public' />
            <input type="url" {...register('repositoryUrl', {required: true})} placeholder='Repository URL' />
            <input type="text" {...register('teamLead', {required: true})} placeholder='Team Lead' />
            <input type="password" {...register('budgetCode', {maxLength: 8, required: true})} placeholder='Budget Code (Max 8 characters)' />
            <textarea {...register('description', {maxLength: 200, required: true})} placeholder='Project Description' />
            <button type='submit'>Submit</button>
        </form>
    </div>

  )
}
// help to import this component in other file
export default SupabaseForm