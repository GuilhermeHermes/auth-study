import { signOut } from "@/auth"


export function SignOut() {
  return (
    <form 
      action={async () => {
        "use server"
        await signOut()
      }}
    >
     <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-sm shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50" type="submit">
  Logout
</button>

    </form>
  )
}