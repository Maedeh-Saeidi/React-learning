import './App.css'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

function App() {

  const queryClient = useQueryClient();

  const fetchPosts = () => fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json());

  // const {data} = useQuery({
  //   queryKey : ["posts"],
  //   queryFn: ()=>
  //     fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((res)=> res.json()),
  //     refetchInterval : 4000,
  // })

  // const id = data.id

  const { data, isLoading, error } = useQuery({
    queryKey: ['todo'],
    queryFn: fetchPosts(),

    //fetch again in specific conditions
    staletime: 4000,

    //if the user change tab it will not refetch!
    refetchOnWindowFocus: false,

    //number of the try before it gets failure, yani kolan 5 ta talash mikone aghar be eshkal bokhore!
    retry: 5,

    //fetch data each 4 seconds  
    // refetchInterval: 4000,

    // enabled: !!id,
  });


  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: (newPost) => fetch('https://jsonplaceholder.typicode.com/posts', {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: { "Content-Type": "application/json; charset=UTF-8" }
    }).then((res) => res.json()),
    onSuccess: (newPost) => {
      //refetch base on querykey:
      // queryClient.invalidateQueries({ queryKey: ['todo'] });

      //Adding to cache and make it show the data in the cache and new data. when we refresh we cannot see anything new actually
      queryClient.setQueryData(['todo'], (oldPosts) => [...oldPosts, newPost])
    }
  })

  if (isLoading || isPending) return <div>is Loading...</div>

  if (error || isError) return <div>There was an Error!</div>
  return (
    <div>
      {isPending && <p>DATA IS BEING ADDED...</p>}
      <button onClick={() => mutate({
        "userId": 5000,
        "id": 4000,
        "title": "Hey my name is Maedeh",
        "body": "This is the body of the post"
      })}>
        Add Post
      </button>
      {!isLoading &&
        data.map((todo) => <div>
          <h1>  {todo.id}</h1>
          <h2>{todo.title}</h2>
          <h4>{todo.body}</h4>

        </div>)}
    </div>
  )
}

export default App
