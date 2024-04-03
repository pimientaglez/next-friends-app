export default function PostId({params}: {
    params: {id: string}
}) {
    return (
      <h1>Posts {params.id}</h1>
    )
  }