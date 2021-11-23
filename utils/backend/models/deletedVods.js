import mongoose from 'mongoose';

const PlayedGame = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
      nullable: true,
      unique: false,
    },
    image: {
      type: String,
      required: false,
      nullable: true,
    },
  },
  {
    _id: false,
    nullable: true,
  },
);

const VodModel = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
      unique: true,
    },
    date: {
      type: Date,
      required: true,
    },
    length: {
      type: Number,
      required: true,
      nullable: true,
    },
    playedGames: [PlayedGame],
  },
  {
    _id: false,
  },
);

const deletedVods = new mongoose.Schema(
  {
    streamer: {
      type: String,
      required: true,
      unique: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    vods: {
      type: [VodModel],
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

export default mongoose.models.deletedVods ||
  mongoose.model('DeletedVods', deletedVods);
