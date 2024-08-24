import React from 'react'
import DashboardNav from '../../components/DashboardNav'
import BookList from '../../components/BookList'

const books = [
  {
    id: "1",
    title: "My Sisters Keeper",
    backgroundImage:
      "https://plus.unsplash.com/premium_photo-1724411829646-cc1105f94dfd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    title: "My Sisters Keeper",
    backgroundImage:
      "https://plus.unsplash.com/premium_photo-1724411829646-cc1105f94dfd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    title: "My Sisters Keeper",
    backgroundImage:
      "https://plus.unsplash.com/premium_photo-1724411829646-cc1105f94dfd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const UserDashboard = () => {
  return (
    <div className='user-dashboard'>
      <DashboardNav />
      <section className='current-projects-parent'>
        <h3 className='current-projects'>Current Projects</h3>
        <BookList books={books} />
      </section>
    </div>
  )
}

export default UserDashboard