import Link from 'next/link'

export default function Post({ post }) {
  return (
    <div className='card'>
      <img src={post.frontmatter.cover_image} alt='' />

      <h3>{post.frontmatter.title}</h3>

      <p>{post.frontmatter.summary}</p>

      <div className="buttons">
        
        <Link href={`${post.frontmatter.website}`}>
          <a className='button'>Website</a>
        </Link>

        <Link href={`${post.frontmatter.video}`}>
          <a className='button'>Video</a>
        </Link>
      </div>

    </div>
  )
}
