import {
  EyeOpenIcon,
  CogIcon,
  HeartIcon,
  ClockIcon,
  HomeIcon,
  InfoOutlineIcon,
  CommentIcon,
  AddIcon,
  SparklesIcon,
  SparkleIcon,
  ActivityIcon,
  ComposeIcon,
} from '@sanity/icons'

export const myStructure = (S) =>
  S.list()
    .title('Innhold')
    .items([
      S.listItem()
        .title('Constants')
        .icon(CogIcon)
        .child(
          S.list()
            .title('Constants')
            .items([
              S.listItem()
                .title('Innhold')
                .icon(ClockIcon)
                .child(S.document().schemaType('constants').documentId('constants')),
            ]),
        ),
      S.divider(),

      ...S.documentTypeListItems().filter((listItem) => !['constants'].includes(listItem.getId())),
    ])
