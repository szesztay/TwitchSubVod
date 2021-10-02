import mongoose from 'mongoose';

const SearchedZones = new mongoose.Schema(
  {
    start: Number,
    end: Number,
  },
  {
    _id: false,
  },
);

const deletedClips = new mongoose.Schema(
  {
    vod: {
      type: String,
      required: true,
    },
    clips: {
      type: Array,
      required: true,
    },
    searchedZones: {
      type: [SearchedZones],
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

if (process.env.NODE_ENV === 'development') {
  // when nextjs recompiles in dev mode it tries to recompile the model too, which causes an error of model overwrite
  mongoose.models = {};
}

export default mongoose.models.DeletedClips ||
  mongoose.model('DeletedClips', deletedClips);
