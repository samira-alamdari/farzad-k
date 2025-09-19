import { createAsyncThunk ,createSlice} from "@reduxjs/toolkit"
export const fetchProjects = async () => {
    const res = await fetch("./db.json")
    if (!res.ok) throw new Error("Error in fetching data...")
    const data = await res.json()
    return data.posts
}

export const getProjects = createAsyncThunk(
    "projects/getProjects",
    async (_, thunkAPI) => {
      try {
        const response = await fetchProjects()
        return response
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
      }
    }
  )

const initialState = {
  projects: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
}

const ProjectSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getProjects.pending, (state) => {
          state.status = "loading"
        })
        .addCase(getProjects.fulfilled, (state, action) => {
          state.status = "succeeded"
          state.projects = action.payload
        })
        .addCase(getProjects.rejected, (state, action) => {
          state.status = "failed"
          state.error = action.payload
        })
    },
  })
  
  export default ProjectSlice.reducer