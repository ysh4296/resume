/* eslint-disable */

declare namespace GatsbyTypes {
  type Maybe<T> = T | null;
  type InputMaybe<T> = T | null;
  type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
  type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
  };
  type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
  };
  /** All built-in and custom scalars, mapped to their actual values */
  type Scalars = {
    /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
    ID: string;
    /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
    String: string;
    /** The `Boolean` scalar type represents `true` or `false`. */
    Boolean: boolean;
    /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
    Int: number;
    /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
    Float: number;
    /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
    Date: string;
    GatsbyImageData: import("gatsby-plugin-image").IGatsbyImageData;
    /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSON: any;
    /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
    SANITY_Date: any;
    /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
    SANITY_DateTime: any;
  };

  type AVIFOptions = {
    readonly lossless: InputMaybe<Scalars["Boolean"]>;
    readonly quality: InputMaybe<Scalars["Int"]>;
    readonly speed: InputMaybe<Scalars["Int"]>;
  };

  type BlurredOptions = {
    /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
    readonly toFormat: InputMaybe<ImageFormat>;
    /** Width of the generated low-res preview. Default is 20px */
    readonly width: InputMaybe<Scalars["Int"]>;
  };

  type BooleanQueryOperatorInput = {
    readonly eq: InputMaybe<Scalars["Boolean"]>;
    readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Boolean"]>>>;
    readonly ne: InputMaybe<Scalars["Boolean"]>;
    readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Boolean"]>>>;
  };

  type DateQueryOperatorInput = {
    readonly eq: InputMaybe<Scalars["Date"]>;
    readonly gt: InputMaybe<Scalars["Date"]>;
    readonly gte: InputMaybe<Scalars["Date"]>;
    readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Date"]>>>;
    readonly lt: InputMaybe<Scalars["Date"]>;
    readonly lte: InputMaybe<Scalars["Date"]>;
    readonly ne: InputMaybe<Scalars["Date"]>;
    readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Date"]>>>;
  };

  type Directory = Node & {
    readonly absolutePath: Scalars["String"];
    readonly accessTime: Scalars["Date"];
    readonly atime: Scalars["Date"];
    readonly atimeMs: Scalars["Float"];
    readonly base: Scalars["String"];
    readonly birthTime: Scalars["Date"];
    /** @deprecated Use `birthTime` instead */
    readonly birthtime: Maybe<Scalars["Date"]>;
    /** @deprecated Use `birthTime` instead */
    readonly birthtimeMs: Maybe<Scalars["Float"]>;
    readonly changeTime: Scalars["Date"];
    readonly children: ReadonlyArray<Node>;
    readonly ctime: Scalars["Date"];
    readonly ctimeMs: Scalars["Float"];
    readonly dev: Scalars["Int"];
    readonly dir: Scalars["String"];
    readonly ext: Scalars["String"];
    readonly extension: Scalars["String"];
    readonly gid: Scalars["Int"];
    readonly id: Scalars["ID"];
    readonly ino: Scalars["Float"];
    readonly internal: Internal;
    readonly mode: Scalars["Int"];
    readonly modifiedTime: Scalars["Date"];
    readonly mtime: Scalars["Date"];
    readonly mtimeMs: Scalars["Float"];
    readonly name: Scalars["String"];
    readonly nlink: Scalars["Int"];
    readonly parent: Maybe<Node>;
    readonly prettySize: Scalars["String"];
    readonly rdev: Scalars["Int"];
    readonly relativeDirectory: Scalars["String"];
    readonly relativePath: Scalars["String"];
    readonly root: Scalars["String"];
    readonly size: Scalars["Int"];
    readonly sourceInstanceName: Scalars["String"];
    readonly uid: Scalars["Int"];
  };

  type Directory_accessTimeArgs = {
    difference: InputMaybe<Scalars["String"]>;
    formatString: InputMaybe<Scalars["String"]>;
    fromNow: InputMaybe<Scalars["Boolean"]>;
    locale: InputMaybe<Scalars["String"]>;
  };

  type Directory_atimeArgs = {
    difference: InputMaybe<Scalars["String"]>;
    formatString: InputMaybe<Scalars["String"]>;
    fromNow: InputMaybe<Scalars["Boolean"]>;
    locale: InputMaybe<Scalars["String"]>;
  };

  type Directory_birthTimeArgs = {
    difference: InputMaybe<Scalars["String"]>;
    formatString: InputMaybe<Scalars["String"]>;
    fromNow: InputMaybe<Scalars["Boolean"]>;
    locale: InputMaybe<Scalars["String"]>;
  };

  type Directory_changeTimeArgs = {
    difference: InputMaybe<Scalars["String"]>;
    formatString: InputMaybe<Scalars["String"]>;
    fromNow: InputMaybe<Scalars["Boolean"]>;
    locale: InputMaybe<Scalars["String"]>;
  };

  type Directory_ctimeArgs = {
    difference: InputMaybe<Scalars["String"]>;
    formatString: InputMaybe<Scalars["String"]>;
    fromNow: InputMaybe<Scalars["Boolean"]>;
    locale: InputMaybe<Scalars["String"]>;
  };

  type Directory_modifiedTimeArgs = {
    difference: InputMaybe<Scalars["String"]>;
    formatString: InputMaybe<Scalars["String"]>;
    fromNow: InputMaybe<Scalars["Boolean"]>;
    locale: InputMaybe<Scalars["String"]>;
  };

  type Directory_mtimeArgs = {
    difference: InputMaybe<Scalars["String"]>;
    formatString: InputMaybe<Scalars["String"]>;
    fromNow: InputMaybe<Scalars["Boolean"]>;
    locale: InputMaybe<Scalars["String"]>;
  };

  type DirectoryConnection = {
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly edges: ReadonlyArray<DirectoryEdge>;
    readonly group: ReadonlyArray<DirectoryGroupConnection>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly nodes: ReadonlyArray<Directory>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly totalCount: Scalars["Int"];
  };

  type DirectoryConnection_distinctArgs = {
    field: DirectoryFieldSelector;
  };

  type DirectoryConnection_groupArgs = {
    field: DirectoryFieldSelector;
    limit: InputMaybe<Scalars["Int"]>;
    skip: InputMaybe<Scalars["Int"]>;
  };

  type DirectoryConnection_maxArgs = {
    field: DirectoryFieldSelector;
  };

  type DirectoryConnection_minArgs = {
    field: DirectoryFieldSelector;
  };

  type DirectoryConnection_sumArgs = {
    field: DirectoryFieldSelector;
  };

  type DirectoryEdge = {
    readonly next: Maybe<Directory>;
    readonly node: Directory;
    readonly previous: Maybe<Directory>;
  };

  type DirectoryFieldSelector = {
    readonly absolutePath: InputMaybe<FieldSelectorEnum>;
    readonly accessTime: InputMaybe<FieldSelectorEnum>;
    readonly atime: InputMaybe<FieldSelectorEnum>;
    readonly atimeMs: InputMaybe<FieldSelectorEnum>;
    readonly base: InputMaybe<FieldSelectorEnum>;
    readonly birthTime: InputMaybe<FieldSelectorEnum>;
    readonly birthtime: InputMaybe<FieldSelectorEnum>;
    readonly birthtimeMs: InputMaybe<FieldSelectorEnum>;
    readonly changeTime: InputMaybe<FieldSelectorEnum>;
    readonly children: InputMaybe<NodeFieldSelector>;
    readonly ctime: InputMaybe<FieldSelectorEnum>;
    readonly ctimeMs: InputMaybe<FieldSelectorEnum>;
    readonly dev: InputMaybe<FieldSelectorEnum>;
    readonly dir: InputMaybe<FieldSelectorEnum>;
    readonly ext: InputMaybe<FieldSelectorEnum>;
    readonly extension: InputMaybe<FieldSelectorEnum>;
    readonly gid: InputMaybe<FieldSelectorEnum>;
    readonly id: InputMaybe<FieldSelectorEnum>;
    readonly ino: InputMaybe<FieldSelectorEnum>;
    readonly internal: InputMaybe<InternalFieldSelector>;
    readonly mode: InputMaybe<FieldSelectorEnum>;
    readonly modifiedTime: InputMaybe<FieldSelectorEnum>;
    readonly mtime: InputMaybe<FieldSelectorEnum>;
    readonly mtimeMs: InputMaybe<FieldSelectorEnum>;
    readonly name: InputMaybe<FieldSelectorEnum>;
    readonly nlink: InputMaybe<FieldSelectorEnum>;
    readonly parent: InputMaybe<NodeFieldSelector>;
    readonly prettySize: InputMaybe<FieldSelectorEnum>;
    readonly rdev: InputMaybe<FieldSelectorEnum>;
    readonly relativeDirectory: InputMaybe<FieldSelectorEnum>;
    readonly relativePath: InputMaybe<FieldSelectorEnum>;
    readonly root: InputMaybe<FieldSelectorEnum>;
    readonly size: InputMaybe<FieldSelectorEnum>;
    readonly sourceInstanceName: InputMaybe<FieldSelectorEnum>;
    readonly uid: InputMaybe<FieldSelectorEnum>;
  };

  type DirectoryFilterInput = {
    readonly absolutePath: InputMaybe<StringQueryOperatorInput>;
    readonly accessTime: InputMaybe<DateQueryOperatorInput>;
    readonly atime: InputMaybe<DateQueryOperatorInput>;
    readonly atimeMs: InputMaybe<FloatQueryOperatorInput>;
    readonly base: InputMaybe<StringQueryOperatorInput>;
    readonly birthTime: InputMaybe<DateQueryOperatorInput>;
    readonly birthtime: InputMaybe<DateQueryOperatorInput>;
    readonly birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
    readonly changeTime: InputMaybe<DateQueryOperatorInput>;
    readonly children: InputMaybe<NodeFilterListInput>;
    readonly ctime: InputMaybe<DateQueryOperatorInput>;
    readonly ctimeMs: InputMaybe<FloatQueryOperatorInput>;
    readonly dev: InputMaybe<IntQueryOperatorInput>;
    readonly dir: InputMaybe<StringQueryOperatorInput>;
    readonly ext: InputMaybe<StringQueryOperatorInput>;
    readonly extension: InputMaybe<StringQueryOperatorInput>;
    readonly gid: InputMaybe<IntQueryOperatorInput>;
    readonly id: InputMaybe<StringQueryOperatorInput>;
    readonly ino: InputMaybe<FloatQueryOperatorInput>;
    readonly internal: InputMaybe<InternalFilterInput>;
    readonly mode: InputMaybe<IntQueryOperatorInput>;
    readonly modifiedTime: InputMaybe<DateQueryOperatorInput>;
    readonly mtime: InputMaybe<DateQueryOperatorInput>;
    readonly mtimeMs: InputMaybe<FloatQueryOperatorInput>;
    readonly name: InputMaybe<StringQueryOperatorInput>;
    readonly nlink: InputMaybe<IntQueryOperatorInput>;
    readonly parent: InputMaybe<NodeFilterInput>;
    readonly prettySize: InputMaybe<StringQueryOperatorInput>;
    readonly rdev: InputMaybe<IntQueryOperatorInput>;
    readonly relativeDirectory: InputMaybe<StringQueryOperatorInput>;
    readonly relativePath: InputMaybe<StringQueryOperatorInput>;
    readonly root: InputMaybe<StringQueryOperatorInput>;
    readonly size: InputMaybe<IntQueryOperatorInput>;
    readonly sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
    readonly uid: InputMaybe<IntQueryOperatorInput>;
  };

  type DirectoryGroupConnection = {
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly edges: ReadonlyArray<DirectoryEdge>;
    readonly field: Scalars["String"];
    readonly fieldValue: Maybe<Scalars["String"]>;
    readonly group: ReadonlyArray<DirectoryGroupConnection>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly nodes: ReadonlyArray<Directory>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly totalCount: Scalars["Int"];
  };

  type DirectoryGroupConnection_distinctArgs = {
    field: DirectoryFieldSelector;
  };

  type DirectoryGroupConnection_groupArgs = {
    field: DirectoryFieldSelector;
    limit: InputMaybe<Scalars["Int"]>;
    skip: InputMaybe<Scalars["Int"]>;
  };

  type DirectoryGroupConnection_maxArgs = {
    field: DirectoryFieldSelector;
  };

  type DirectoryGroupConnection_minArgs = {
    field: DirectoryFieldSelector;
  };

  type DirectoryGroupConnection_sumArgs = {
    field: DirectoryFieldSelector;
  };

  type DirectorySortInput = {
    readonly absolutePath: InputMaybe<SortOrderEnum>;
    readonly accessTime: InputMaybe<SortOrderEnum>;
    readonly atime: InputMaybe<SortOrderEnum>;
    readonly atimeMs: InputMaybe<SortOrderEnum>;
    readonly base: InputMaybe<SortOrderEnum>;
    readonly birthTime: InputMaybe<SortOrderEnum>;
    readonly birthtime: InputMaybe<SortOrderEnum>;
    readonly birthtimeMs: InputMaybe<SortOrderEnum>;
    readonly changeTime: InputMaybe<SortOrderEnum>;
    readonly children: InputMaybe<NodeSortInput>;
    readonly ctime: InputMaybe<SortOrderEnum>;
    readonly ctimeMs: InputMaybe<SortOrderEnum>;
    readonly dev: InputMaybe<SortOrderEnum>;
    readonly dir: InputMaybe<SortOrderEnum>;
    readonly ext: InputMaybe<SortOrderEnum>;
    readonly extension: InputMaybe<SortOrderEnum>;
    readonly gid: InputMaybe<SortOrderEnum>;
    readonly id: InputMaybe<SortOrderEnum>;
    readonly ino: InputMaybe<SortOrderEnum>;
    readonly internal: InputMaybe<InternalSortInput>;
    readonly mode: InputMaybe<SortOrderEnum>;
    readonly modifiedTime: InputMaybe<SortOrderEnum>;
    readonly mtime: InputMaybe<SortOrderEnum>;
    readonly mtimeMs: InputMaybe<SortOrderEnum>;
    readonly name: InputMaybe<SortOrderEnum>;
    readonly nlink: InputMaybe<SortOrderEnum>;
    readonly parent: InputMaybe<NodeSortInput>;
    readonly prettySize: InputMaybe<SortOrderEnum>;
    readonly rdev: InputMaybe<SortOrderEnum>;
    readonly relativeDirectory: InputMaybe<SortOrderEnum>;
    readonly relativePath: InputMaybe<SortOrderEnum>;
    readonly root: InputMaybe<SortOrderEnum>;
    readonly size: InputMaybe<SortOrderEnum>;
    readonly sourceInstanceName: InputMaybe<SortOrderEnum>;
    readonly uid: InputMaybe<SortOrderEnum>;
  };

  type DuotoneGradient = {
    readonly highlight: Scalars["String"];
    readonly opacity: InputMaybe<Scalars["Int"]>;
    readonly shadow: Scalars["String"];
  };

  type FieldSelectorEnum = "SELECT";

  type File = Node & {
    readonly absolutePath: Scalars["String"];
    readonly accessTime: Scalars["Date"];
    readonly atime: Scalars["Date"];
    readonly atimeMs: Scalars["Float"];
    readonly base: Scalars["String"];
    readonly birthTime: Scalars["Date"];
    /** @deprecated Use `birthTime` instead */
    readonly birthtime: Maybe<Scalars["Date"]>;
    /** @deprecated Use `birthTime` instead */
    readonly birthtimeMs: Maybe<Scalars["Float"]>;
    readonly changeTime: Scalars["Date"];
    /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
    readonly childImageSharp: Maybe<ImageSharp>;
    readonly children: ReadonlyArray<Node>;
    /** Returns all children nodes filtered by type ImageSharp */
    readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
    readonly ctime: Scalars["Date"];
    readonly ctimeMs: Scalars["Float"];
    readonly dev: Scalars["Int"];
    readonly dir: Scalars["String"];
    readonly ext: Scalars["String"];
    readonly extension: Scalars["String"];
    readonly gid: Scalars["Int"];
    readonly id: Scalars["ID"];
    readonly ino: Scalars["Float"];
    readonly internal: Internal;
    readonly mode: Scalars["Int"];
    readonly modifiedTime: Scalars["Date"];
    readonly mtime: Scalars["Date"];
    readonly mtimeMs: Scalars["Float"];
    readonly name: Scalars["String"];
    readonly nlink: Scalars["Int"];
    readonly parent: Maybe<Node>;
    readonly prettySize: Scalars["String"];
    readonly rdev: Scalars["Int"];
    readonly relativeDirectory: Scalars["String"];
    readonly relativePath: Scalars["String"];
    readonly root: Scalars["String"];
    readonly size: Scalars["Int"];
    readonly sourceInstanceName: Scalars["String"];
    readonly uid: Scalars["Int"];
  };

  type File_accessTimeArgs = {
    difference: InputMaybe<Scalars["String"]>;
    formatString: InputMaybe<Scalars["String"]>;
    fromNow: InputMaybe<Scalars["Boolean"]>;
    locale: InputMaybe<Scalars["String"]>;
  };

  type File_atimeArgs = {
    difference: InputMaybe<Scalars["String"]>;
    formatString: InputMaybe<Scalars["String"]>;
    fromNow: InputMaybe<Scalars["Boolean"]>;
    locale: InputMaybe<Scalars["String"]>;
  };

  type File_birthTimeArgs = {
    difference: InputMaybe<Scalars["String"]>;
    formatString: InputMaybe<Scalars["String"]>;
    fromNow: InputMaybe<Scalars["Boolean"]>;
    locale: InputMaybe<Scalars["String"]>;
  };

  type File_changeTimeArgs = {
    difference: InputMaybe<Scalars["String"]>;
    formatString: InputMaybe<Scalars["String"]>;
    fromNow: InputMaybe<Scalars["Boolean"]>;
    locale: InputMaybe<Scalars["String"]>;
  };

  type File_ctimeArgs = {
    difference: InputMaybe<Scalars["String"]>;
    formatString: InputMaybe<Scalars["String"]>;
    fromNow: InputMaybe<Scalars["Boolean"]>;
    locale: InputMaybe<Scalars["String"]>;
  };

  type File_modifiedTimeArgs = {
    difference: InputMaybe<Scalars["String"]>;
    formatString: InputMaybe<Scalars["String"]>;
    fromNow: InputMaybe<Scalars["Boolean"]>;
    locale: InputMaybe<Scalars["String"]>;
  };

  type File_mtimeArgs = {
    difference: InputMaybe<Scalars["String"]>;
    formatString: InputMaybe<Scalars["String"]>;
    fromNow: InputMaybe<Scalars["Boolean"]>;
    locale: InputMaybe<Scalars["String"]>;
  };

  type FileConnection = {
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly edges: ReadonlyArray<FileEdge>;
    readonly group: ReadonlyArray<FileGroupConnection>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly nodes: ReadonlyArray<File>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly totalCount: Scalars["Int"];
  };

  type FileConnection_distinctArgs = {
    field: FileFieldSelector;
  };

  type FileConnection_groupArgs = {
    field: FileFieldSelector;
    limit: InputMaybe<Scalars["Int"]>;
    skip: InputMaybe<Scalars["Int"]>;
  };

  type FileConnection_maxArgs = {
    field: FileFieldSelector;
  };

  type FileConnection_minArgs = {
    field: FileFieldSelector;
  };

  type FileConnection_sumArgs = {
    field: FileFieldSelector;
  };

  type FileEdge = {
    readonly next: Maybe<File>;
    readonly node: File;
    readonly previous: Maybe<File>;
  };

  type FileFieldSelector = {
    readonly absolutePath: InputMaybe<FieldSelectorEnum>;
    readonly accessTime: InputMaybe<FieldSelectorEnum>;
    readonly atime: InputMaybe<FieldSelectorEnum>;
    readonly atimeMs: InputMaybe<FieldSelectorEnum>;
    readonly base: InputMaybe<FieldSelectorEnum>;
    readonly birthTime: InputMaybe<FieldSelectorEnum>;
    readonly birthtime: InputMaybe<FieldSelectorEnum>;
    readonly birthtimeMs: InputMaybe<FieldSelectorEnum>;
    readonly changeTime: InputMaybe<FieldSelectorEnum>;
    readonly childImageSharp: InputMaybe<ImageSharpFieldSelector>;
    readonly children: InputMaybe<NodeFieldSelector>;
    readonly childrenImageSharp: InputMaybe<ImageSharpFieldSelector>;
    readonly ctime: InputMaybe<FieldSelectorEnum>;
    readonly ctimeMs: InputMaybe<FieldSelectorEnum>;
    readonly dev: InputMaybe<FieldSelectorEnum>;
    readonly dir: InputMaybe<FieldSelectorEnum>;
    readonly ext: InputMaybe<FieldSelectorEnum>;
    readonly extension: InputMaybe<FieldSelectorEnum>;
    readonly gid: InputMaybe<FieldSelectorEnum>;
    readonly id: InputMaybe<FieldSelectorEnum>;
    readonly ino: InputMaybe<FieldSelectorEnum>;
    readonly internal: InputMaybe<InternalFieldSelector>;
    readonly mode: InputMaybe<FieldSelectorEnum>;
    readonly modifiedTime: InputMaybe<FieldSelectorEnum>;
    readonly mtime: InputMaybe<FieldSelectorEnum>;
    readonly mtimeMs: InputMaybe<FieldSelectorEnum>;
    readonly name: InputMaybe<FieldSelectorEnum>;
    readonly nlink: InputMaybe<FieldSelectorEnum>;
    readonly parent: InputMaybe<NodeFieldSelector>;
    readonly prettySize: InputMaybe<FieldSelectorEnum>;
    readonly rdev: InputMaybe<FieldSelectorEnum>;
    readonly relativeDirectory: InputMaybe<FieldSelectorEnum>;
    readonly relativePath: InputMaybe<FieldSelectorEnum>;
    readonly root: InputMaybe<FieldSelectorEnum>;
    readonly size: InputMaybe<FieldSelectorEnum>;
    readonly sourceInstanceName: InputMaybe<FieldSelectorEnum>;
    readonly uid: InputMaybe<FieldSelectorEnum>;
  };

  type FileFilterInput = {
    readonly absolutePath: InputMaybe<StringQueryOperatorInput>;
    readonly accessTime: InputMaybe<DateQueryOperatorInput>;
    readonly atime: InputMaybe<DateQueryOperatorInput>;
    readonly atimeMs: InputMaybe<FloatQueryOperatorInput>;
    readonly base: InputMaybe<StringQueryOperatorInput>;
    readonly birthTime: InputMaybe<DateQueryOperatorInput>;
    readonly birthtime: InputMaybe<DateQueryOperatorInput>;
    readonly birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
    readonly changeTime: InputMaybe<DateQueryOperatorInput>;
    readonly childImageSharp: InputMaybe<ImageSharpFilterInput>;
    readonly children: InputMaybe<NodeFilterListInput>;
    readonly childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
    readonly ctime: InputMaybe<DateQueryOperatorInput>;
    readonly ctimeMs: InputMaybe<FloatQueryOperatorInput>;
    readonly dev: InputMaybe<IntQueryOperatorInput>;
    readonly dir: InputMaybe<StringQueryOperatorInput>;
    readonly ext: InputMaybe<StringQueryOperatorInput>;
    readonly extension: InputMaybe<StringQueryOperatorInput>;
    readonly gid: InputMaybe<IntQueryOperatorInput>;
    readonly id: InputMaybe<StringQueryOperatorInput>;
    readonly ino: InputMaybe<FloatQueryOperatorInput>;
    readonly internal: InputMaybe<InternalFilterInput>;
    readonly mode: InputMaybe<IntQueryOperatorInput>;
    readonly modifiedTime: InputMaybe<DateQueryOperatorInput>;
    readonly mtime: InputMaybe<DateQueryOperatorInput>;
    readonly mtimeMs: InputMaybe<FloatQueryOperatorInput>;
    readonly name: InputMaybe<StringQueryOperatorInput>;
    readonly nlink: InputMaybe<IntQueryOperatorInput>;
    readonly parent: InputMaybe<NodeFilterInput>;
    readonly prettySize: InputMaybe<StringQueryOperatorInput>;
    readonly rdev: InputMaybe<IntQueryOperatorInput>;
    readonly relativeDirectory: InputMaybe<StringQueryOperatorInput>;
    readonly relativePath: InputMaybe<StringQueryOperatorInput>;
    readonly root: InputMaybe<StringQueryOperatorInput>;
    readonly size: InputMaybe<IntQueryOperatorInput>;
    readonly sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
    readonly uid: InputMaybe<IntQueryOperatorInput>;
  };

  type FileGroupConnection = {
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly edges: ReadonlyArray<FileEdge>;
    readonly field: Scalars["String"];
    readonly fieldValue: Maybe<Scalars["String"]>;
    readonly group: ReadonlyArray<FileGroupConnection>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly nodes: ReadonlyArray<File>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly totalCount: Scalars["Int"];
  };

  type FileGroupConnection_distinctArgs = {
    field: FileFieldSelector;
  };

  type FileGroupConnection_groupArgs = {
    field: FileFieldSelector;
    limit: InputMaybe<Scalars["Int"]>;
    skip: InputMaybe<Scalars["Int"]>;
  };

  type FileGroupConnection_maxArgs = {
    field: FileFieldSelector;
  };

  type FileGroupConnection_minArgs = {
    field: FileFieldSelector;
  };

  type FileGroupConnection_sumArgs = {
    field: FileFieldSelector;
  };

  type FileSortInput = {
    readonly absolutePath: InputMaybe<SortOrderEnum>;
    readonly accessTime: InputMaybe<SortOrderEnum>;
    readonly atime: InputMaybe<SortOrderEnum>;
    readonly atimeMs: InputMaybe<SortOrderEnum>;
    readonly base: InputMaybe<SortOrderEnum>;
    readonly birthTime: InputMaybe<SortOrderEnum>;
    readonly birthtime: InputMaybe<SortOrderEnum>;
    readonly birthtimeMs: InputMaybe<SortOrderEnum>;
    readonly changeTime: InputMaybe<SortOrderEnum>;
    readonly childImageSharp: InputMaybe<ImageSharpSortInput>;
    readonly children: InputMaybe<NodeSortInput>;
    readonly childrenImageSharp: InputMaybe<ImageSharpSortInput>;
    readonly ctime: InputMaybe<SortOrderEnum>;
    readonly ctimeMs: InputMaybe<SortOrderEnum>;
    readonly dev: InputMaybe<SortOrderEnum>;
    readonly dir: InputMaybe<SortOrderEnum>;
    readonly ext: InputMaybe<SortOrderEnum>;
    readonly extension: InputMaybe<SortOrderEnum>;
    readonly gid: InputMaybe<SortOrderEnum>;
    readonly id: InputMaybe<SortOrderEnum>;
    readonly ino: InputMaybe<SortOrderEnum>;
    readonly internal: InputMaybe<InternalSortInput>;
    readonly mode: InputMaybe<SortOrderEnum>;
    readonly modifiedTime: InputMaybe<SortOrderEnum>;
    readonly mtime: InputMaybe<SortOrderEnum>;
    readonly mtimeMs: InputMaybe<SortOrderEnum>;
    readonly name: InputMaybe<SortOrderEnum>;
    readonly nlink: InputMaybe<SortOrderEnum>;
    readonly parent: InputMaybe<NodeSortInput>;
    readonly prettySize: InputMaybe<SortOrderEnum>;
    readonly rdev: InputMaybe<SortOrderEnum>;
    readonly relativeDirectory: InputMaybe<SortOrderEnum>;
    readonly relativePath: InputMaybe<SortOrderEnum>;
    readonly root: InputMaybe<SortOrderEnum>;
    readonly size: InputMaybe<SortOrderEnum>;
    readonly sourceInstanceName: InputMaybe<SortOrderEnum>;
    readonly uid: InputMaybe<SortOrderEnum>;
  };

  type FloatQueryOperatorInput = {
    readonly eq: InputMaybe<Scalars["Float"]>;
    readonly gt: InputMaybe<Scalars["Float"]>;
    readonly gte: InputMaybe<Scalars["Float"]>;
    readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Float"]>>>;
    readonly lt: InputMaybe<Scalars["Float"]>;
    readonly lte: InputMaybe<Scalars["Float"]>;
    readonly ne: InputMaybe<Scalars["Float"]>;
    readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Float"]>>>;
  };

  type GatsbyImageDataQueryOperatorInput = {
    readonly eq: InputMaybe<Scalars["GatsbyImageData"]>;
    readonly in: InputMaybe<
      ReadonlyArray<InputMaybe<Scalars["GatsbyImageData"]>>
    >;
    readonly ne: InputMaybe<Scalars["GatsbyImageData"]>;
    readonly nin: InputMaybe<
      ReadonlyArray<InputMaybe<Scalars["GatsbyImageData"]>>
    >;
  };

  type GatsbyImageFormat = "auto" | "avif" | "jpg" | "" | "png" | "webp";

  type GatsbyImageLayout = "constrained" | "fixed" | "fullWidth";

  type GatsbyImagePlaceholder =
    | "blurred"
    | "dominantColor"
    | "none"
    | "tracedSVG";

  type GraphQLSource = Node & {
    readonly children: ReadonlyArray<Node>;
    readonly fieldName: Maybe<Scalars["String"]>;
    readonly id: Scalars["ID"];
    readonly internal: Internal;
    readonly parent: Maybe<Node>;
    readonly typeName: Maybe<Scalars["String"]>;
  };

  type GraphQLSourceConnection = {
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly edges: ReadonlyArray<GraphQLSourceEdge>;
    readonly group: ReadonlyArray<GraphQLSourceGroupConnection>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly nodes: ReadonlyArray<GraphQLSource>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly totalCount: Scalars["Int"];
  };

  type GraphQLSourceConnection_distinctArgs = {
    field: GraphQLSourceFieldSelector;
  };

  type GraphQLSourceConnection_groupArgs = {
    field: GraphQLSourceFieldSelector;
    limit: InputMaybe<Scalars["Int"]>;
    skip: InputMaybe<Scalars["Int"]>;
  };

  type GraphQLSourceConnection_maxArgs = {
    field: GraphQLSourceFieldSelector;
  };

  type GraphQLSourceConnection_minArgs = {
    field: GraphQLSourceFieldSelector;
  };

  type GraphQLSourceConnection_sumArgs = {
    field: GraphQLSourceFieldSelector;
  };

  type GraphQLSourceEdge = {
    readonly next: Maybe<GraphQLSource>;
    readonly node: GraphQLSource;
    readonly previous: Maybe<GraphQLSource>;
  };

  type GraphQLSourceFieldSelector = {
    readonly children: InputMaybe<NodeFieldSelector>;
    readonly fieldName: InputMaybe<FieldSelectorEnum>;
    readonly id: InputMaybe<FieldSelectorEnum>;
    readonly internal: InputMaybe<InternalFieldSelector>;
    readonly parent: InputMaybe<NodeFieldSelector>;
    readonly typeName: InputMaybe<FieldSelectorEnum>;
  };

  type GraphQLSourceFilterInput = {
    readonly children: InputMaybe<NodeFilterListInput>;
    readonly fieldName: InputMaybe<StringQueryOperatorInput>;
    readonly id: InputMaybe<StringQueryOperatorInput>;
    readonly internal: InputMaybe<InternalFilterInput>;
    readonly parent: InputMaybe<NodeFilterInput>;
    readonly typeName: InputMaybe<StringQueryOperatorInput>;
  };

  type GraphQLSourceGroupConnection = {
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly edges: ReadonlyArray<GraphQLSourceEdge>;
    readonly field: Scalars["String"];
    readonly fieldValue: Maybe<Scalars["String"]>;
    readonly group: ReadonlyArray<GraphQLSourceGroupConnection>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly nodes: ReadonlyArray<GraphQLSource>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly totalCount: Scalars["Int"];
  };

  type GraphQLSourceGroupConnection_distinctArgs = {
    field: GraphQLSourceFieldSelector;
  };

  type GraphQLSourceGroupConnection_groupArgs = {
    field: GraphQLSourceFieldSelector;
    limit: InputMaybe<Scalars["Int"]>;
    skip: InputMaybe<Scalars["Int"]>;
  };

  type GraphQLSourceGroupConnection_maxArgs = {
    field: GraphQLSourceFieldSelector;
  };

  type GraphQLSourceGroupConnection_minArgs = {
    field: GraphQLSourceFieldSelector;
  };

  type GraphQLSourceGroupConnection_sumArgs = {
    field: GraphQLSourceFieldSelector;
  };

  type GraphQLSourceSortInput = {
    readonly children: InputMaybe<NodeSortInput>;
    readonly fieldName: InputMaybe<SortOrderEnum>;
    readonly id: InputMaybe<SortOrderEnum>;
    readonly internal: InputMaybe<InternalSortInput>;
    readonly parent: InputMaybe<NodeSortInput>;
    readonly typeName: InputMaybe<SortOrderEnum>;
  };

  type ImageCropFocus = 17 | 0 | 2 | 16 | 1 | 5 | 8 | 3 | 6 | 7 | 4;

  type ImageFit = "contain" | "cover" | "fill" | "inside" | "outside";

  type ImageFormat = "" | "avif" | "jpg" | "" | "png" | "webp";

  type ImageLayout = "constrained" | "fixed" | "fullWidth";

  type ImagePlaceholder = "blurred" | "dominantColor" | "none" | "tracedSVG";

  type ImageSharp = Node & {
    readonly children: ReadonlyArray<Node>;
    readonly fixed: Maybe<ImageSharpFixed>;
    readonly fluid: Maybe<ImageSharpFluid>;
    readonly gatsbyImageData: Scalars["GatsbyImageData"];
    readonly id: Scalars["ID"];
    readonly internal: Internal;
    readonly original: Maybe<ImageSharpOriginal>;
    readonly parent: Maybe<Node>;
    readonly resize: Maybe<ImageSharpResize>;
  };

  type ImageSharp_fixedArgs = {
    background?: InputMaybe<Scalars["String"]>;
    base64Width: InputMaybe<Scalars["Int"]>;
    cropFocus?: InputMaybe<ImageCropFocus>;
    duotone?: InputMaybe<DuotoneGradient>;
    fit?: InputMaybe<ImageFit>;
    grayscale?: InputMaybe<Scalars["Boolean"]>;
    height: InputMaybe<Scalars["Int"]>;
    jpegProgressive?: InputMaybe<Scalars["Boolean"]>;
    jpegQuality: InputMaybe<Scalars["Int"]>;
    pngCompressionSpeed?: InputMaybe<Scalars["Int"]>;
    pngQuality: InputMaybe<Scalars["Int"]>;
    quality: InputMaybe<Scalars["Int"]>;
    rotate?: InputMaybe<Scalars["Int"]>;
    toFormat?: InputMaybe<ImageFormat>;
    toFormatBase64?: InputMaybe<ImageFormat>;
    traceSVG?: InputMaybe<Potrace>;
    trim?: InputMaybe<Scalars["Float"]>;
    webpQuality: InputMaybe<Scalars["Int"]>;
    width: InputMaybe<Scalars["Int"]>;
  };

  type ImageSharp_fluidArgs = {
    background?: InputMaybe<Scalars["String"]>;
    base64Width: InputMaybe<Scalars["Int"]>;
    cropFocus?: InputMaybe<ImageCropFocus>;
    duotone?: InputMaybe<DuotoneGradient>;
    fit?: InputMaybe<ImageFit>;
    grayscale?: InputMaybe<Scalars["Boolean"]>;
    jpegProgressive?: InputMaybe<Scalars["Boolean"]>;
    jpegQuality: InputMaybe<Scalars["Int"]>;
    maxHeight: InputMaybe<Scalars["Int"]>;
    maxWidth: InputMaybe<Scalars["Int"]>;
    pngCompressionSpeed?: InputMaybe<Scalars["Int"]>;
    pngQuality: InputMaybe<Scalars["Int"]>;
    quality: InputMaybe<Scalars["Int"]>;
    rotate?: InputMaybe<Scalars["Int"]>;
    sizes?: InputMaybe<Scalars["String"]>;
    srcSetBreakpoints?: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>;
    toFormat?: InputMaybe<ImageFormat>;
    toFormatBase64?: InputMaybe<ImageFormat>;
    traceSVG?: InputMaybe<Potrace>;
    trim?: InputMaybe<Scalars["Float"]>;
    webpQuality: InputMaybe<Scalars["Int"]>;
  };

  type ImageSharp_gatsbyImageDataArgs = {
    aspectRatio: InputMaybe<Scalars["Float"]>;
    avifOptions: InputMaybe<AVIFOptions>;
    backgroundColor: InputMaybe<Scalars["String"]>;
    blurredOptions: InputMaybe<BlurredOptions>;
    breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>;
    formats: InputMaybe<ReadonlyArray<InputMaybe<ImageFormat>>>;
    height: InputMaybe<Scalars["Int"]>;
    jpgOptions: InputMaybe<JPGOptions>;
    layout?: InputMaybe<ImageLayout>;
    outputPixelDensities: InputMaybe<
      ReadonlyArray<InputMaybe<Scalars["Float"]>>
    >;
    placeholder: InputMaybe<ImagePlaceholder>;
    pngOptions: InputMaybe<PNGOptions>;
    quality: InputMaybe<Scalars["Int"]>;
    sizes: InputMaybe<Scalars["String"]>;
    tracedSVGOptions: InputMaybe<Potrace>;
    transformOptions: InputMaybe<TransformOptions>;
    webpOptions: InputMaybe<WebPOptions>;
    width: InputMaybe<Scalars["Int"]>;
  };

  type ImageSharp_resizeArgs = {
    background?: InputMaybe<Scalars["String"]>;
    base64?: InputMaybe<Scalars["Boolean"]>;
    cropFocus?: InputMaybe<ImageCropFocus>;
    duotone?: InputMaybe<DuotoneGradient>;
    fit?: InputMaybe<ImageFit>;
    grayscale?: InputMaybe<Scalars["Boolean"]>;
    height: InputMaybe<Scalars["Int"]>;
    jpegProgressive?: InputMaybe<Scalars["Boolean"]>;
    jpegQuality: InputMaybe<Scalars["Int"]>;
    pngCompressionLevel?: InputMaybe<Scalars["Int"]>;
    pngCompressionSpeed?: InputMaybe<Scalars["Int"]>;
    pngQuality: InputMaybe<Scalars["Int"]>;
    quality: InputMaybe<Scalars["Int"]>;
    rotate?: InputMaybe<Scalars["Int"]>;
    toFormat?: InputMaybe<ImageFormat>;
    traceSVG?: InputMaybe<Potrace>;
    trim?: InputMaybe<Scalars["Float"]>;
    webpQuality: InputMaybe<Scalars["Int"]>;
    width: InputMaybe<Scalars["Int"]>;
  };

  type ImageSharpConnection = {
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly edges: ReadonlyArray<ImageSharpEdge>;
    readonly group: ReadonlyArray<ImageSharpGroupConnection>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly nodes: ReadonlyArray<ImageSharp>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly totalCount: Scalars["Int"];
  };

  type ImageSharpConnection_distinctArgs = {
    field: ImageSharpFieldSelector;
  };

  type ImageSharpConnection_groupArgs = {
    field: ImageSharpFieldSelector;
    limit: InputMaybe<Scalars["Int"]>;
    skip: InputMaybe<Scalars["Int"]>;
  };

  type ImageSharpConnection_maxArgs = {
    field: ImageSharpFieldSelector;
  };

  type ImageSharpConnection_minArgs = {
    field: ImageSharpFieldSelector;
  };

  type ImageSharpConnection_sumArgs = {
    field: ImageSharpFieldSelector;
  };

  type ImageSharpEdge = {
    readonly next: Maybe<ImageSharp>;
    readonly node: ImageSharp;
    readonly previous: Maybe<ImageSharp>;
  };

  type ImageSharpFieldSelector = {
    readonly children: InputMaybe<NodeFieldSelector>;
    readonly fixed: InputMaybe<ImageSharpFixedFieldSelector>;
    readonly fluid: InputMaybe<ImageSharpFluidFieldSelector>;
    readonly gatsbyImageData: InputMaybe<FieldSelectorEnum>;
    readonly id: InputMaybe<FieldSelectorEnum>;
    readonly internal: InputMaybe<InternalFieldSelector>;
    readonly original: InputMaybe<ImageSharpOriginalFieldSelector>;
    readonly parent: InputMaybe<NodeFieldSelector>;
    readonly resize: InputMaybe<ImageSharpResizeFieldSelector>;
  };

  type ImageSharpFilterInput = {
    readonly children: InputMaybe<NodeFilterListInput>;
    readonly fixed: InputMaybe<ImageSharpFixedFilterInput>;
    readonly fluid: InputMaybe<ImageSharpFluidFilterInput>;
    readonly gatsbyImageData: InputMaybe<GatsbyImageDataQueryOperatorInput>;
    readonly id: InputMaybe<StringQueryOperatorInput>;
    readonly internal: InputMaybe<InternalFilterInput>;
    readonly original: InputMaybe<ImageSharpOriginalFilterInput>;
    readonly parent: InputMaybe<NodeFilterInput>;
    readonly resize: InputMaybe<ImageSharpResizeFilterInput>;
  };

  type ImageSharpFilterListInput = {
    readonly elemMatch: InputMaybe<ImageSharpFilterInput>;
  };

  type ImageSharpFixed = {
    readonly aspectRatio: Maybe<Scalars["Float"]>;
    readonly base64: Maybe<Scalars["String"]>;
    readonly height: Scalars["Float"];
    readonly originalName: Maybe<Scalars["String"]>;
    readonly src: Scalars["String"];
    readonly srcSet: Scalars["String"];
    readonly srcSetWebp: Maybe<Scalars["String"]>;
    readonly srcWebp: Maybe<Scalars["String"]>;
    readonly tracedSVG: Maybe<Scalars["String"]>;
    readonly width: Scalars["Float"];
  };

  type ImageSharpFixedFieldSelector = {
    readonly aspectRatio: InputMaybe<FieldSelectorEnum>;
    readonly base64: InputMaybe<FieldSelectorEnum>;
    readonly height: InputMaybe<FieldSelectorEnum>;
    readonly originalName: InputMaybe<FieldSelectorEnum>;
    readonly src: InputMaybe<FieldSelectorEnum>;
    readonly srcSet: InputMaybe<FieldSelectorEnum>;
    readonly srcSetWebp: InputMaybe<FieldSelectorEnum>;
    readonly srcWebp: InputMaybe<FieldSelectorEnum>;
    readonly tracedSVG: InputMaybe<FieldSelectorEnum>;
    readonly width: InputMaybe<FieldSelectorEnum>;
  };

  type ImageSharpFixedFilterInput = {
    readonly aspectRatio: InputMaybe<FloatQueryOperatorInput>;
    readonly base64: InputMaybe<StringQueryOperatorInput>;
    readonly height: InputMaybe<FloatQueryOperatorInput>;
    readonly originalName: InputMaybe<StringQueryOperatorInput>;
    readonly src: InputMaybe<StringQueryOperatorInput>;
    readonly srcSet: InputMaybe<StringQueryOperatorInput>;
    readonly srcSetWebp: InputMaybe<StringQueryOperatorInput>;
    readonly srcWebp: InputMaybe<StringQueryOperatorInput>;
    readonly tracedSVG: InputMaybe<StringQueryOperatorInput>;
    readonly width: InputMaybe<FloatQueryOperatorInput>;
  };

  type ImageSharpFixedSortInput = {
    readonly aspectRatio: InputMaybe<SortOrderEnum>;
    readonly base64: InputMaybe<SortOrderEnum>;
    readonly height: InputMaybe<SortOrderEnum>;
    readonly originalName: InputMaybe<SortOrderEnum>;
    readonly src: InputMaybe<SortOrderEnum>;
    readonly srcSet: InputMaybe<SortOrderEnum>;
    readonly srcSetWebp: InputMaybe<SortOrderEnum>;
    readonly srcWebp: InputMaybe<SortOrderEnum>;
    readonly tracedSVG: InputMaybe<SortOrderEnum>;
    readonly width: InputMaybe<SortOrderEnum>;
  };

  type ImageSharpFluid = {
    readonly aspectRatio: Scalars["Float"];
    readonly base64: Maybe<Scalars["String"]>;
    readonly originalImg: Maybe<Scalars["String"]>;
    readonly originalName: Maybe<Scalars["String"]>;
    readonly presentationHeight: Scalars["Int"];
    readonly presentationWidth: Scalars["Int"];
    readonly sizes: Scalars["String"];
    readonly src: Scalars["String"];
    readonly srcSet: Scalars["String"];
    readonly srcSetWebp: Maybe<Scalars["String"]>;
    readonly srcWebp: Maybe<Scalars["String"]>;
    readonly tracedSVG: Maybe<Scalars["String"]>;
  };

  type ImageSharpFluidFieldSelector = {
    readonly aspectRatio: InputMaybe<FieldSelectorEnum>;
    readonly base64: InputMaybe<FieldSelectorEnum>;
    readonly originalImg: InputMaybe<FieldSelectorEnum>;
    readonly originalName: InputMaybe<FieldSelectorEnum>;
    readonly presentationHeight: InputMaybe<FieldSelectorEnum>;
    readonly presentationWidth: InputMaybe<FieldSelectorEnum>;
    readonly sizes: InputMaybe<FieldSelectorEnum>;
    readonly src: InputMaybe<FieldSelectorEnum>;
    readonly srcSet: InputMaybe<FieldSelectorEnum>;
    readonly srcSetWebp: InputMaybe<FieldSelectorEnum>;
    readonly srcWebp: InputMaybe<FieldSelectorEnum>;
    readonly tracedSVG: InputMaybe<FieldSelectorEnum>;
  };

  type ImageSharpFluidFilterInput = {
    readonly aspectRatio: InputMaybe<FloatQueryOperatorInput>;
    readonly base64: InputMaybe<StringQueryOperatorInput>;
    readonly originalImg: InputMaybe<StringQueryOperatorInput>;
    readonly originalName: InputMaybe<StringQueryOperatorInput>;
    readonly presentationHeight: InputMaybe<IntQueryOperatorInput>;
    readonly presentationWidth: InputMaybe<IntQueryOperatorInput>;
    readonly sizes: InputMaybe<StringQueryOperatorInput>;
    readonly src: InputMaybe<StringQueryOperatorInput>;
    readonly srcSet: InputMaybe<StringQueryOperatorInput>;
    readonly srcSetWebp: InputMaybe<StringQueryOperatorInput>;
    readonly srcWebp: InputMaybe<StringQueryOperatorInput>;
    readonly tracedSVG: InputMaybe<StringQueryOperatorInput>;
  };

  type ImageSharpFluidSortInput = {
    readonly aspectRatio: InputMaybe<SortOrderEnum>;
    readonly base64: InputMaybe<SortOrderEnum>;
    readonly originalImg: InputMaybe<SortOrderEnum>;
    readonly originalName: InputMaybe<SortOrderEnum>;
    readonly presentationHeight: InputMaybe<SortOrderEnum>;
    readonly presentationWidth: InputMaybe<SortOrderEnum>;
    readonly sizes: InputMaybe<SortOrderEnum>;
    readonly src: InputMaybe<SortOrderEnum>;
    readonly srcSet: InputMaybe<SortOrderEnum>;
    readonly srcSetWebp: InputMaybe<SortOrderEnum>;
    readonly srcWebp: InputMaybe<SortOrderEnum>;
    readonly tracedSVG: InputMaybe<SortOrderEnum>;
  };

  type ImageSharpGroupConnection = {
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly edges: ReadonlyArray<ImageSharpEdge>;
    readonly field: Scalars["String"];
    readonly fieldValue: Maybe<Scalars["String"]>;
    readonly group: ReadonlyArray<ImageSharpGroupConnection>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly nodes: ReadonlyArray<ImageSharp>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly totalCount: Scalars["Int"];
  };

  type ImageSharpGroupConnection_distinctArgs = {
    field: ImageSharpFieldSelector;
  };

  type ImageSharpGroupConnection_groupArgs = {
    field: ImageSharpFieldSelector;
    limit: InputMaybe<Scalars["Int"]>;
    skip: InputMaybe<Scalars["Int"]>;
  };

  type ImageSharpGroupConnection_maxArgs = {
    field: ImageSharpFieldSelector;
  };

  type ImageSharpGroupConnection_minArgs = {
    field: ImageSharpFieldSelector;
  };

  type ImageSharpGroupConnection_sumArgs = {
    field: ImageSharpFieldSelector;
  };

  type ImageSharpOriginal = {
    readonly height: Maybe<Scalars["Float"]>;
    readonly src: Maybe<Scalars["String"]>;
    readonly width: Maybe<Scalars["Float"]>;
  };

  type ImageSharpOriginalFieldSelector = {
    readonly height: InputMaybe<FieldSelectorEnum>;
    readonly src: InputMaybe<FieldSelectorEnum>;
    readonly width: InputMaybe<FieldSelectorEnum>;
  };

  type ImageSharpOriginalFilterInput = {
    readonly height: InputMaybe<FloatQueryOperatorInput>;
    readonly src: InputMaybe<StringQueryOperatorInput>;
    readonly width: InputMaybe<FloatQueryOperatorInput>;
  };

  type ImageSharpOriginalSortInput = {
    readonly height: InputMaybe<SortOrderEnum>;
    readonly src: InputMaybe<SortOrderEnum>;
    readonly width: InputMaybe<SortOrderEnum>;
  };

  type ImageSharpResize = {
    readonly aspectRatio: Maybe<Scalars["Float"]>;
    readonly height: Maybe<Scalars["Int"]>;
    readonly originalName: Maybe<Scalars["String"]>;
    readonly src: Maybe<Scalars["String"]>;
    readonly tracedSVG: Maybe<Scalars["String"]>;
    readonly width: Maybe<Scalars["Int"]>;
  };

  type ImageSharpResizeFieldSelector = {
    readonly aspectRatio: InputMaybe<FieldSelectorEnum>;
    readonly height: InputMaybe<FieldSelectorEnum>;
    readonly originalName: InputMaybe<FieldSelectorEnum>;
    readonly src: InputMaybe<FieldSelectorEnum>;
    readonly tracedSVG: InputMaybe<FieldSelectorEnum>;
    readonly width: InputMaybe<FieldSelectorEnum>;
  };

  type ImageSharpResizeFilterInput = {
    readonly aspectRatio: InputMaybe<FloatQueryOperatorInput>;
    readonly height: InputMaybe<IntQueryOperatorInput>;
    readonly originalName: InputMaybe<StringQueryOperatorInput>;
    readonly src: InputMaybe<StringQueryOperatorInput>;
    readonly tracedSVG: InputMaybe<StringQueryOperatorInput>;
    readonly width: InputMaybe<IntQueryOperatorInput>;
  };

  type ImageSharpResizeSortInput = {
    readonly aspectRatio: InputMaybe<SortOrderEnum>;
    readonly height: InputMaybe<SortOrderEnum>;
    readonly originalName: InputMaybe<SortOrderEnum>;
    readonly src: InputMaybe<SortOrderEnum>;
    readonly tracedSVG: InputMaybe<SortOrderEnum>;
    readonly width: InputMaybe<SortOrderEnum>;
  };

  type ImageSharpSortInput = {
    readonly children: InputMaybe<NodeSortInput>;
    readonly fixed: InputMaybe<ImageSharpFixedSortInput>;
    readonly fluid: InputMaybe<ImageSharpFluidSortInput>;
    readonly gatsbyImageData: InputMaybe<SortOrderEnum>;
    readonly id: InputMaybe<SortOrderEnum>;
    readonly internal: InputMaybe<InternalSortInput>;
    readonly original: InputMaybe<ImageSharpOriginalSortInput>;
    readonly parent: InputMaybe<NodeSortInput>;
    readonly resize: InputMaybe<ImageSharpResizeSortInput>;
  };

  type IntQueryOperatorInput = {
    readonly eq: InputMaybe<Scalars["Int"]>;
    readonly gt: InputMaybe<Scalars["Int"]>;
    readonly gte: InputMaybe<Scalars["Int"]>;
    readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>;
    readonly lt: InputMaybe<Scalars["Int"]>;
    readonly lte: InputMaybe<Scalars["Int"]>;
    readonly ne: InputMaybe<Scalars["Int"]>;
    readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>;
  };

  type Internal = {
    readonly content: Maybe<Scalars["String"]>;
    readonly contentDigest: Scalars["String"];
    readonly contentFilePath: Maybe<Scalars["String"]>;
    readonly description: Maybe<Scalars["String"]>;
    readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
    readonly ignoreType: Maybe<Scalars["Boolean"]>;
    readonly mediaType: Maybe<Scalars["String"]>;
    readonly owner: Scalars["String"];
    readonly type: Scalars["String"];
  };

  type InternalFieldSelector = {
    readonly content: InputMaybe<FieldSelectorEnum>;
    readonly contentDigest: InputMaybe<FieldSelectorEnum>;
    readonly contentFilePath: InputMaybe<FieldSelectorEnum>;
    readonly description: InputMaybe<FieldSelectorEnum>;
    readonly fieldOwners: InputMaybe<FieldSelectorEnum>;
    readonly ignoreType: InputMaybe<FieldSelectorEnum>;
    readonly mediaType: InputMaybe<FieldSelectorEnum>;
    readonly owner: InputMaybe<FieldSelectorEnum>;
    readonly type: InputMaybe<FieldSelectorEnum>;
  };

  type InternalFilterInput = {
    readonly content: InputMaybe<StringQueryOperatorInput>;
    readonly contentDigest: InputMaybe<StringQueryOperatorInput>;
    readonly contentFilePath: InputMaybe<StringQueryOperatorInput>;
    readonly description: InputMaybe<StringQueryOperatorInput>;
    readonly fieldOwners: InputMaybe<StringQueryOperatorInput>;
    readonly ignoreType: InputMaybe<BooleanQueryOperatorInput>;
    readonly mediaType: InputMaybe<StringQueryOperatorInput>;
    readonly owner: InputMaybe<StringQueryOperatorInput>;
    readonly type: InputMaybe<StringQueryOperatorInput>;
  };

  type InternalSortInput = {
    readonly content: InputMaybe<SortOrderEnum>;
    readonly contentDigest: InputMaybe<SortOrderEnum>;
    readonly contentFilePath: InputMaybe<SortOrderEnum>;
    readonly description: InputMaybe<SortOrderEnum>;
    readonly fieldOwners: InputMaybe<SortOrderEnum>;
    readonly ignoreType: InputMaybe<SortOrderEnum>;
    readonly mediaType: InputMaybe<SortOrderEnum>;
    readonly owner: InputMaybe<SortOrderEnum>;
    readonly type: InputMaybe<SortOrderEnum>;
  };

  type JPGOptions = {
    readonly progressive: InputMaybe<Scalars["Boolean"]>;
    readonly quality: InputMaybe<Scalars["Int"]>;
  };

  type JSONQueryOperatorInput = {
    readonly eq: InputMaybe<Scalars["JSON"]>;
    readonly glob: InputMaybe<Scalars["JSON"]>;
    readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars["JSON"]>>>;
    readonly ne: InputMaybe<Scalars["JSON"]>;
    readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars["JSON"]>>>;
    readonly regex: InputMaybe<Scalars["JSON"]>;
  };

  /** Node Interface */
  type Node = {
    readonly children: ReadonlyArray<Node>;
    readonly id: Scalars["ID"];
    readonly internal: Internal;
    readonly parent: Maybe<Node>;
  };

  type NodeFieldSelector = {
    readonly children: InputMaybe<NodeFieldSelector>;
    readonly id: InputMaybe<FieldSelectorEnum>;
    readonly internal: InputMaybe<InternalFieldSelector>;
    readonly parent: InputMaybe<NodeFieldSelector>;
  };

  type NodeFilterInput = {
    readonly children: InputMaybe<NodeFilterListInput>;
    readonly id: InputMaybe<StringQueryOperatorInput>;
    readonly internal: InputMaybe<InternalFilterInput>;
    readonly parent: InputMaybe<NodeFilterInput>;
  };

  type NodeFilterListInput = {
    readonly elemMatch: InputMaybe<NodeFilterInput>;
  };

  type NodeSortInput = {
    readonly children: InputMaybe<NodeSortInput>;
    readonly id: InputMaybe<SortOrderEnum>;
    readonly internal: InputMaybe<InternalSortInput>;
    readonly parent: InputMaybe<NodeSortInput>;
  };

  type PNGOptions = {
    readonly compressionSpeed: InputMaybe<Scalars["Int"]>;
    readonly quality: InputMaybe<Scalars["Int"]>;
  };

  type PageInfo = {
    readonly currentPage: Scalars["Int"];
    readonly hasNextPage: Scalars["Boolean"];
    readonly hasPreviousPage: Scalars["Boolean"];
    readonly itemCount: Scalars["Int"];
    readonly pageCount: Scalars["Int"];
    readonly perPage: Maybe<Scalars["Int"]>;
    readonly totalCount: Scalars["Int"];
  };

  type Potrace = {
    readonly alphaMax: InputMaybe<Scalars["Float"]>;
    readonly background: InputMaybe<Scalars["String"]>;
    readonly blackOnWhite: InputMaybe<Scalars["Boolean"]>;
    readonly color: InputMaybe<Scalars["String"]>;
    readonly optCurve: InputMaybe<Scalars["Boolean"]>;
    readonly optTolerance: InputMaybe<Scalars["Float"]>;
    readonly threshold: InputMaybe<Scalars["Int"]>;
    readonly turdSize: InputMaybe<Scalars["Float"]>;
    readonly turnPolicy: InputMaybe<PotraceTurnPolicy>;
  };

  type PotraceTurnPolicy =
    | "black"
    | "left"
    | "majority"
    | "minority"
    | "right"
    | "white";

  type Query = {
    readonly allDirectory: DirectoryConnection;
    readonly allFile: FileConnection;
    readonly allGraphQlSource: GraphQLSourceConnection;
    readonly allImageSharp: ImageSharpConnection;
    readonly allSite: SiteConnection;
    readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
    readonly allSiteFunction: SiteFunctionConnection;
    readonly allSitePage: SitePageConnection;
    readonly allSitePlugin: SitePluginConnection;
    readonly directory: Maybe<Directory>;
    readonly file: Maybe<File>;
    readonly graphQlSource: Maybe<GraphQLSource>;
    readonly imageSharp: Maybe<ImageSharp>;
    readonly sanity: SANITY;
    readonly site: Maybe<Site>;
    readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
    readonly siteFunction: Maybe<SiteFunction>;
    readonly sitePage: Maybe<SitePage>;
    readonly sitePlugin: Maybe<SitePlugin>;
  };

  type Query_allDirectoryArgs = {
    filter: InputMaybe<DirectoryFilterInput>;
    limit: InputMaybe<Scalars["Int"]>;
    skip: InputMaybe<Scalars["Int"]>;
    sort: InputMaybe<ReadonlyArray<InputMaybe<DirectorySortInput>>>;
  };

  type Query_allFileArgs = {
    filter: InputMaybe<FileFilterInput>;
    limit: InputMaybe<Scalars["Int"]>;
    skip: InputMaybe<Scalars["Int"]>;
    sort: InputMaybe<ReadonlyArray<InputMaybe<FileSortInput>>>;
  };

  type Query_allGraphQlSourceArgs = {
    filter: InputMaybe<GraphQLSourceFilterInput>;
    limit: InputMaybe<Scalars["Int"]>;
    skip: InputMaybe<Scalars["Int"]>;
    sort: InputMaybe<ReadonlyArray<InputMaybe<GraphQLSourceSortInput>>>;
  };

  type Query_allImageSharpArgs = {
    filter: InputMaybe<ImageSharpFilterInput>;
    limit: InputMaybe<Scalars["Int"]>;
    skip: InputMaybe<Scalars["Int"]>;
    sort: InputMaybe<ReadonlyArray<InputMaybe<ImageSharpSortInput>>>;
  };

  type Query_allSiteArgs = {
    filter: InputMaybe<SiteFilterInput>;
    limit: InputMaybe<Scalars["Int"]>;
    skip: InputMaybe<Scalars["Int"]>;
    sort: InputMaybe<ReadonlyArray<InputMaybe<SiteSortInput>>>;
  };

  type Query_allSiteBuildMetadataArgs = {
    filter: InputMaybe<SiteBuildMetadataFilterInput>;
    limit: InputMaybe<Scalars["Int"]>;
    skip: InputMaybe<Scalars["Int"]>;
    sort: InputMaybe<ReadonlyArray<InputMaybe<SiteBuildMetadataSortInput>>>;
  };

  type Query_allSiteFunctionArgs = {
    filter: InputMaybe<SiteFunctionFilterInput>;
    limit: InputMaybe<Scalars["Int"]>;
    skip: InputMaybe<Scalars["Int"]>;
    sort: InputMaybe<ReadonlyArray<InputMaybe<SiteFunctionSortInput>>>;
  };

  type Query_allSitePageArgs = {
    filter: InputMaybe<SitePageFilterInput>;
    limit: InputMaybe<Scalars["Int"]>;
    skip: InputMaybe<Scalars["Int"]>;
    sort: InputMaybe<ReadonlyArray<InputMaybe<SitePageSortInput>>>;
  };

  type Query_allSitePluginArgs = {
    filter: InputMaybe<SitePluginFilterInput>;
    limit: InputMaybe<Scalars["Int"]>;
    skip: InputMaybe<Scalars["Int"]>;
    sort: InputMaybe<ReadonlyArray<InputMaybe<SitePluginSortInput>>>;
  };

  type Query_directoryArgs = {
    absolutePath: InputMaybe<StringQueryOperatorInput>;
    accessTime: InputMaybe<DateQueryOperatorInput>;
    atime: InputMaybe<DateQueryOperatorInput>;
    atimeMs: InputMaybe<FloatQueryOperatorInput>;
    base: InputMaybe<StringQueryOperatorInput>;
    birthTime: InputMaybe<DateQueryOperatorInput>;
    birthtime: InputMaybe<DateQueryOperatorInput>;
    birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
    changeTime: InputMaybe<DateQueryOperatorInput>;
    children: InputMaybe<NodeFilterListInput>;
    ctime: InputMaybe<DateQueryOperatorInput>;
    ctimeMs: InputMaybe<FloatQueryOperatorInput>;
    dev: InputMaybe<IntQueryOperatorInput>;
    dir: InputMaybe<StringQueryOperatorInput>;
    ext: InputMaybe<StringQueryOperatorInput>;
    extension: InputMaybe<StringQueryOperatorInput>;
    gid: InputMaybe<IntQueryOperatorInput>;
    id: InputMaybe<StringQueryOperatorInput>;
    ino: InputMaybe<FloatQueryOperatorInput>;
    internal: InputMaybe<InternalFilterInput>;
    mode: InputMaybe<IntQueryOperatorInput>;
    modifiedTime: InputMaybe<DateQueryOperatorInput>;
    mtime: InputMaybe<DateQueryOperatorInput>;
    mtimeMs: InputMaybe<FloatQueryOperatorInput>;
    name: InputMaybe<StringQueryOperatorInput>;
    nlink: InputMaybe<IntQueryOperatorInput>;
    parent: InputMaybe<NodeFilterInput>;
    prettySize: InputMaybe<StringQueryOperatorInput>;
    rdev: InputMaybe<IntQueryOperatorInput>;
    relativeDirectory: InputMaybe<StringQueryOperatorInput>;
    relativePath: InputMaybe<StringQueryOperatorInput>;
    root: InputMaybe<StringQueryOperatorInput>;
    size: InputMaybe<IntQueryOperatorInput>;
    sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
    uid: InputMaybe<IntQueryOperatorInput>;
  };

  type Query_fileArgs = {
    absolutePath: InputMaybe<StringQueryOperatorInput>;
    accessTime: InputMaybe<DateQueryOperatorInput>;
    atime: InputMaybe<DateQueryOperatorInput>;
    atimeMs: InputMaybe<FloatQueryOperatorInput>;
    base: InputMaybe<StringQueryOperatorInput>;
    birthTime: InputMaybe<DateQueryOperatorInput>;
    birthtime: InputMaybe<DateQueryOperatorInput>;
    birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
    changeTime: InputMaybe<DateQueryOperatorInput>;
    childImageSharp: InputMaybe<ImageSharpFilterInput>;
    children: InputMaybe<NodeFilterListInput>;
    childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
    ctime: InputMaybe<DateQueryOperatorInput>;
    ctimeMs: InputMaybe<FloatQueryOperatorInput>;
    dev: InputMaybe<IntQueryOperatorInput>;
    dir: InputMaybe<StringQueryOperatorInput>;
    ext: InputMaybe<StringQueryOperatorInput>;
    extension: InputMaybe<StringQueryOperatorInput>;
    gid: InputMaybe<IntQueryOperatorInput>;
    id: InputMaybe<StringQueryOperatorInput>;
    ino: InputMaybe<FloatQueryOperatorInput>;
    internal: InputMaybe<InternalFilterInput>;
    mode: InputMaybe<IntQueryOperatorInput>;
    modifiedTime: InputMaybe<DateQueryOperatorInput>;
    mtime: InputMaybe<DateQueryOperatorInput>;
    mtimeMs: InputMaybe<FloatQueryOperatorInput>;
    name: InputMaybe<StringQueryOperatorInput>;
    nlink: InputMaybe<IntQueryOperatorInput>;
    parent: InputMaybe<NodeFilterInput>;
    prettySize: InputMaybe<StringQueryOperatorInput>;
    rdev: InputMaybe<IntQueryOperatorInput>;
    relativeDirectory: InputMaybe<StringQueryOperatorInput>;
    relativePath: InputMaybe<StringQueryOperatorInput>;
    root: InputMaybe<StringQueryOperatorInput>;
    size: InputMaybe<IntQueryOperatorInput>;
    sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
    uid: InputMaybe<IntQueryOperatorInput>;
  };

  type Query_graphQlSourceArgs = {
    children: InputMaybe<NodeFilterListInput>;
    fieldName: InputMaybe<StringQueryOperatorInput>;
    id: InputMaybe<StringQueryOperatorInput>;
    internal: InputMaybe<InternalFilterInput>;
    parent: InputMaybe<NodeFilterInput>;
    typeName: InputMaybe<StringQueryOperatorInput>;
  };

  type Query_imageSharpArgs = {
    children: InputMaybe<NodeFilterListInput>;
    fixed: InputMaybe<ImageSharpFixedFilterInput>;
    fluid: InputMaybe<ImageSharpFluidFilterInput>;
    gatsbyImageData: InputMaybe<GatsbyImageDataQueryOperatorInput>;
    id: InputMaybe<StringQueryOperatorInput>;
    internal: InputMaybe<InternalFilterInput>;
    original: InputMaybe<ImageSharpOriginalFilterInput>;
    parent: InputMaybe<NodeFilterInput>;
    resize: InputMaybe<ImageSharpResizeFilterInput>;
  };

  type Query_siteArgs = {
    buildTime: InputMaybe<DateQueryOperatorInput>;
    children: InputMaybe<NodeFilterListInput>;
    graphqlTypegen: InputMaybe<SiteGraphqlTypegenFilterInput>;
    id: InputMaybe<StringQueryOperatorInput>;
    internal: InputMaybe<InternalFilterInput>;
    jsxRuntime: InputMaybe<StringQueryOperatorInput>;
    parent: InputMaybe<NodeFilterInput>;
    pathPrefix: InputMaybe<StringQueryOperatorInput>;
    polyfill: InputMaybe<BooleanQueryOperatorInput>;
    siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
    trailingSlash: InputMaybe<StringQueryOperatorInput>;
  };

  type Query_siteBuildMetadataArgs = {
    buildTime: InputMaybe<DateQueryOperatorInput>;
    children: InputMaybe<NodeFilterListInput>;
    id: InputMaybe<StringQueryOperatorInput>;
    internal: InputMaybe<InternalFilterInput>;
    parent: InputMaybe<NodeFilterInput>;
  };

  type Query_siteFunctionArgs = {
    absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
    children: InputMaybe<NodeFilterListInput>;
    functionRoute: InputMaybe<StringQueryOperatorInput>;
    id: InputMaybe<StringQueryOperatorInput>;
    internal: InputMaybe<InternalFilterInput>;
    matchPath: InputMaybe<StringQueryOperatorInput>;
    originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
    originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
    parent: InputMaybe<NodeFilterInput>;
    pluginName: InputMaybe<StringQueryOperatorInput>;
    relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  };

  type Query_sitePageArgs = {
    children: InputMaybe<NodeFilterListInput>;
    component: InputMaybe<StringQueryOperatorInput>;
    componentChunkName: InputMaybe<StringQueryOperatorInput>;
    id: InputMaybe<StringQueryOperatorInput>;
    internal: InputMaybe<InternalFilterInput>;
    internalComponentName: InputMaybe<StringQueryOperatorInput>;
    matchPath: InputMaybe<StringQueryOperatorInput>;
    pageContext: InputMaybe<JSONQueryOperatorInput>;
    parent: InputMaybe<NodeFilterInput>;
    path: InputMaybe<StringQueryOperatorInput>;
    pluginCreator: InputMaybe<SitePluginFilterInput>;
  };

  type Query_sitePluginArgs = {
    browserAPIs: InputMaybe<StringQueryOperatorInput>;
    children: InputMaybe<NodeFilterListInput>;
    id: InputMaybe<StringQueryOperatorInput>;
    internal: InputMaybe<InternalFilterInput>;
    name: InputMaybe<StringQueryOperatorInput>;
    nodeAPIs: InputMaybe<StringQueryOperatorInput>;
    packageJson: InputMaybe<JSONQueryOperatorInput>;
    parent: InputMaybe<NodeFilterInput>;
    pluginFilepath: InputMaybe<StringQueryOperatorInput>;
    pluginOptions: InputMaybe<JSONQueryOperatorInput>;
    resolve: InputMaybe<StringQueryOperatorInput>;
    ssrAPIs: InputMaybe<StringQueryOperatorInput>;
    version: InputMaybe<StringQueryOperatorInput>;
  };

  type SANITY = {
    readonly Document: Maybe<SANITY_Document>;
    readonly Job: Maybe<SANITY_Job>;
    readonly Post: Maybe<SANITY_Post>;
    readonly SanityFileAsset: Maybe<SANITY_SanityFileAsset>;
    readonly SanityImageAsset: Maybe<SANITY_SanityImageAsset>;
    readonly allDocument: ReadonlyArray<SANITY_Document>;
    readonly allJob: ReadonlyArray<SANITY_Job>;
    readonly allPost: ReadonlyArray<SANITY_Post>;
    readonly allSanityFileAsset: ReadonlyArray<SANITY_SanityFileAsset>;
    readonly allSanityImageAsset: ReadonlyArray<SANITY_SanityImageAsset>;
  };

  type SANITY_DocumentArgs = {
    id: Scalars["ID"];
  };

  type SANITY_JobArgs = {
    id: Scalars["ID"];
  };

  type SANITY_PostArgs = {
    id: Scalars["ID"];
  };

  type SANITY_SanityFileAssetArgs = {
    id: Scalars["ID"];
  };

  type SANITY_SanityImageAssetArgs = {
    id: Scalars["ID"];
  };

  type SANITY_allDocumentArgs = {
    limit: InputMaybe<Scalars["Int"]>;
    offset: InputMaybe<Scalars["Int"]>;
    sort: InputMaybe<ReadonlyArray<SANITY_DocumentSorting>>;
    where: InputMaybe<SANITY_DocumentFilter>;
  };

  type SANITY_allJobArgs = {
    limit: InputMaybe<Scalars["Int"]>;
    offset: InputMaybe<Scalars["Int"]>;
    sort: InputMaybe<ReadonlyArray<SANITY_JobSorting>>;
    where: InputMaybe<SANITY_JobFilter>;
  };

  type SANITY_allPostArgs = {
    limit: InputMaybe<Scalars["Int"]>;
    offset: InputMaybe<Scalars["Int"]>;
    sort: InputMaybe<ReadonlyArray<SANITY_PostSorting>>;
    where: InputMaybe<SANITY_PostFilter>;
  };

  type SANITY_allSanityFileAssetArgs = {
    limit: InputMaybe<Scalars["Int"]>;
    offset: InputMaybe<Scalars["Int"]>;
    sort: InputMaybe<ReadonlyArray<SANITY_SanityFileAssetSorting>>;
    where: InputMaybe<SANITY_SanityFileAssetFilter>;
  };

  type SANITY_allSanityImageAssetArgs = {
    limit: InputMaybe<Scalars["Int"]>;
    offset: InputMaybe<Scalars["Int"]>;
    sort: InputMaybe<ReadonlyArray<SANITY_SanityImageAssetSorting>>;
    where: InputMaybe<SANITY_SanityImageAssetFilter>;
  };

  type SANITY_Block = {
    readonly _key: Maybe<Scalars["String"]>;
    readonly _type: Maybe<Scalars["String"]>;
    readonly children: Maybe<ReadonlyArray<Maybe<SANITY_Span>>>;
    readonly level: Maybe<Scalars["Float"]>;
    readonly listItem: Maybe<Scalars["String"]>;
    readonly style: Maybe<Scalars["String"]>;
  };

  type SANITY_BooleanFilter = {
    /** Checks if the value is equal to the given input. */
    readonly eq: InputMaybe<Scalars["Boolean"]>;
    /** Checks if the value is defined. */
    readonly is_defined: InputMaybe<Scalars["Boolean"]>;
    /** Checks if the value is not equal to the given input. */
    readonly neq: InputMaybe<Scalars["Boolean"]>;
  };

  type SANITY_CrossDatasetReference = {
    readonly _dataset: Maybe<Scalars["String"]>;
    readonly _key: Maybe<Scalars["String"]>;
    readonly _projectId: Maybe<Scalars["String"]>;
    readonly _ref: Maybe<Scalars["String"]>;
    readonly _type: Maybe<Scalars["String"]>;
    readonly _weak: Maybe<Scalars["Boolean"]>;
  };

  type SANITY_CrossDatasetReferenceFilter = {
    readonly _dataset: InputMaybe<SANITY_StringFilter>;
    readonly _key: InputMaybe<SANITY_StringFilter>;
    readonly _projectId: InputMaybe<SANITY_StringFilter>;
    readonly _ref: InputMaybe<SANITY_StringFilter>;
    readonly _type: InputMaybe<SANITY_StringFilter>;
    readonly _weak: InputMaybe<SANITY_BooleanFilter>;
  };

  type SANITY_CrossDatasetReferenceSorting = {
    readonly _dataset: InputMaybe<SANITY_SortOrder>;
    readonly _key: InputMaybe<SANITY_SortOrder>;
    readonly _projectId: InputMaybe<SANITY_SortOrder>;
    readonly _ref: InputMaybe<SANITY_SortOrder>;
    readonly _type: InputMaybe<SANITY_SortOrder>;
    readonly _weak: InputMaybe<SANITY_SortOrder>;
  };

  type SANITY_DateFilter = {
    /** Checks if the value is equal to the given input. */
    readonly eq: InputMaybe<Scalars["SANITY_Date"]>;
    /** Checks if the value is greater than the given input. */
    readonly gt: InputMaybe<Scalars["SANITY_Date"]>;
    /** Checks if the value is greater than or equal to the given input. */
    readonly gte: InputMaybe<Scalars["SANITY_Date"]>;
    /** Checks if the value is defined. */
    readonly is_defined: InputMaybe<Scalars["Boolean"]>;
    /** Checks if the value is lesser than the given input. */
    readonly lt: InputMaybe<Scalars["SANITY_Date"]>;
    /** Checks if the value is lesser than or equal to the given input. */
    readonly lte: InputMaybe<Scalars["SANITY_Date"]>;
    /** Checks if the value is not equal to the given input. */
    readonly neq: InputMaybe<Scalars["SANITY_Date"]>;
  };

  type SANITY_DatetimeFilter = {
    /** Checks if the value is equal to the given input. */
    readonly eq: InputMaybe<Scalars["SANITY_DateTime"]>;
    /** Checks if the value is greater than the given input. */
    readonly gt: InputMaybe<Scalars["SANITY_DateTime"]>;
    /** Checks if the value is greater than or equal to the given input. */
    readonly gte: InputMaybe<Scalars["SANITY_DateTime"]>;
    /** Checks if the value is defined. */
    readonly is_defined: InputMaybe<Scalars["Boolean"]>;
    /** Checks if the value is lesser than the given input. */
    readonly lt: InputMaybe<Scalars["SANITY_DateTime"]>;
    /** Checks if the value is lesser than or equal to the given input. */
    readonly lte: InputMaybe<Scalars["SANITY_DateTime"]>;
    /** Checks if the value is not equal to the given input. */
    readonly neq: InputMaybe<Scalars["SANITY_DateTime"]>;
  };

  /** A Sanity document */
  type SANITY_Document = {
    /** Date the document was created */
    readonly _createdAt: Maybe<Scalars["SANITY_DateTime"]>;
    /** Document ID */
    readonly _id: Maybe<Scalars["ID"]>;
    /** Current document revision */
    readonly _rev: Maybe<Scalars["String"]>;
    /** Document type */
    readonly _type: Maybe<Scalars["String"]>;
    /** Date the document was last modified */
    readonly _updatedAt: Maybe<Scalars["SANITY_DateTime"]>;
  };

  type SANITY_DocumentFilter = {
    /** Apply filters on document level */
    readonly _: InputMaybe<SANITY_Sanity_DocumentFilter>;
    readonly _createdAt: InputMaybe<SANITY_DatetimeFilter>;
    readonly _id: InputMaybe<SANITY_IDFilter>;
    readonly _rev: InputMaybe<SANITY_StringFilter>;
    readonly _type: InputMaybe<SANITY_StringFilter>;
    readonly _updatedAt: InputMaybe<SANITY_DatetimeFilter>;
  };

  type SANITY_DocumentSorting = {
    readonly _createdAt: InputMaybe<SANITY_SortOrder>;
    readonly _id: InputMaybe<SANITY_SortOrder>;
    readonly _rev: InputMaybe<SANITY_SortOrder>;
    readonly _type: InputMaybe<SANITY_SortOrder>;
    readonly _updatedAt: InputMaybe<SANITY_SortOrder>;
  };

  type SANITY_File = {
    readonly _key: Maybe<Scalars["String"]>;
    readonly _type: Maybe<Scalars["String"]>;
    readonly asset: Maybe<SANITY_SanityFileAsset>;
  };

  type SANITY_FileFilter = {
    readonly _key: InputMaybe<SANITY_StringFilter>;
    readonly _type: InputMaybe<SANITY_StringFilter>;
    readonly asset: InputMaybe<SANITY_SanityFileAssetFilter>;
  };

  type SANITY_FileSorting = {
    readonly _key: InputMaybe<SANITY_SortOrder>;
    readonly _type: InputMaybe<SANITY_SortOrder>;
  };

  type SANITY_FloatFilter = {
    /** Checks if the value is equal to the given input. */
    readonly eq: InputMaybe<Scalars["Float"]>;
    /** Checks if the value is greater than the given input. */
    readonly gt: InputMaybe<Scalars["Float"]>;
    /** Checks if the value is greater than or equal to the given input. */
    readonly gte: InputMaybe<Scalars["Float"]>;
    /** Checks if the value is defined. */
    readonly is_defined: InputMaybe<Scalars["Boolean"]>;
    /** Checks if the value is lesser than the given input. */
    readonly lt: InputMaybe<Scalars["Float"]>;
    /** Checks if the value is lesser than or equal to the given input. */
    readonly lte: InputMaybe<Scalars["Float"]>;
    /** Checks if the value is not equal to the given input. */
    readonly neq: InputMaybe<Scalars["Float"]>;
  };

  type SANITY_Geopoint = {
    readonly _key: Maybe<Scalars["String"]>;
    readonly _type: Maybe<Scalars["String"]>;
    readonly alt: Maybe<Scalars["Float"]>;
    readonly lat: Maybe<Scalars["Float"]>;
    readonly lng: Maybe<Scalars["Float"]>;
  };

  type SANITY_GeopointFilter = {
    readonly _key: InputMaybe<SANITY_StringFilter>;
    readonly _type: InputMaybe<SANITY_StringFilter>;
    readonly alt: InputMaybe<SANITY_FloatFilter>;
    readonly lat: InputMaybe<SANITY_FloatFilter>;
    readonly lng: InputMaybe<SANITY_FloatFilter>;
  };

  type SANITY_GeopointSorting = {
    readonly _key: InputMaybe<SANITY_SortOrder>;
    readonly _type: InputMaybe<SANITY_SortOrder>;
    readonly alt: InputMaybe<SANITY_SortOrder>;
    readonly lat: InputMaybe<SANITY_SortOrder>;
    readonly lng: InputMaybe<SANITY_SortOrder>;
  };

  type SANITY_IDFilter = {
    /** Checks if the value is equal to the given input. */
    readonly eq: InputMaybe<Scalars["ID"]>;
    readonly in: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
    /** Checks if the value matches the given word/words. */
    readonly matches: InputMaybe<Scalars["ID"]>;
    /** Checks if the value is not equal to the given input. */
    readonly neq: InputMaybe<Scalars["ID"]>;
    readonly nin: InputMaybe<ReadonlyArray<Scalars["ID"]>>;
  };

  type SANITY_Image = {
    readonly _key: Maybe<Scalars["String"]>;
    readonly _type: Maybe<Scalars["String"]>;
    readonly asset: Maybe<SANITY_SanityImageAsset>;
    readonly crop: Maybe<SANITY_SanityImageCrop>;
    readonly hotspot: Maybe<SANITY_SanityImageHotspot>;
  };

  type SANITY_ImageFilter = {
    readonly _key: InputMaybe<SANITY_StringFilter>;
    readonly _type: InputMaybe<SANITY_StringFilter>;
    readonly asset: InputMaybe<SANITY_SanityImageAssetFilter>;
    readonly crop: InputMaybe<SANITY_SanityImageCropFilter>;
    readonly hotspot: InputMaybe<SANITY_SanityImageHotspotFilter>;
  };

  type SANITY_ImageSorting = {
    readonly _key: InputMaybe<SANITY_SortOrder>;
    readonly _type: InputMaybe<SANITY_SortOrder>;
    readonly crop: InputMaybe<SANITY_SanityImageCropSorting>;
    readonly hotspot: InputMaybe<SANITY_SanityImageHotspotSorting>;
  };

  type SANITY_IntFilter = {
    /** Checks if the value is equal to the given input. */
    readonly eq: InputMaybe<Scalars["Int"]>;
    /** Checks if the value is greater than the given input. */
    readonly gt: InputMaybe<Scalars["Int"]>;
    /** Checks if the value is greater than or equal to the given input. */
    readonly gte: InputMaybe<Scalars["Int"]>;
    /** Checks if the value is defined. */
    readonly is_defined: InputMaybe<Scalars["Boolean"]>;
    /** Checks if the value is lesser than the given input. */
    readonly lt: InputMaybe<Scalars["Int"]>;
    /** Checks if the value is lesser than or equal to the given input. */
    readonly lte: InputMaybe<Scalars["Int"]>;
    /** Checks if the value is not equal to the given input. */
    readonly neq: InputMaybe<Scalars["Int"]>;
  };

  type SANITY_Job = SANITY_Document & {
    /** Date the document was created */
    readonly _createdAt: Maybe<Scalars["SANITY_DateTime"]>;
    /** Document ID */
    readonly _id: Maybe<Scalars["ID"]>;
    readonly _key: Maybe<Scalars["String"]>;
    /** Current document revision */
    readonly _rev: Maybe<Scalars["String"]>;
    /** Document type */
    readonly _type: Maybe<Scalars["String"]>;
    /** Date the document was last modified */
    readonly _updatedAt: Maybe<Scalars["SANITY_DateTime"]>;
    /** Add your content in Markdown format */
    readonly content: Maybe<Scalars["String"]>;
    readonly description: Maybe<Scalars["String"]>;
    readonly employType: Maybe<Scalars["String"]>;
    /** Enter the year and month (e.g., 2025-01) */
    readonly endDate: Maybe<Scalars["String"]>;
    readonly image: Maybe<SANITY_Image>;
    readonly name: Maybe<Scalars["String"]>;
    /** Enter the year and month (e.g., 2025-01) */
    readonly startDate: Maybe<Scalars["String"]>;
  };

  type SANITY_JobFilter = {
    /** Apply filters on document level */
    readonly _: InputMaybe<SANITY_Sanity_DocumentFilter>;
    readonly _createdAt: InputMaybe<SANITY_DatetimeFilter>;
    readonly _id: InputMaybe<SANITY_IDFilter>;
    readonly _key: InputMaybe<SANITY_StringFilter>;
    readonly _rev: InputMaybe<SANITY_StringFilter>;
    readonly _type: InputMaybe<SANITY_StringFilter>;
    readonly _updatedAt: InputMaybe<SANITY_DatetimeFilter>;
    readonly content: InputMaybe<SANITY_StringFilter>;
    readonly description: InputMaybe<SANITY_StringFilter>;
    readonly employType: InputMaybe<SANITY_StringFilter>;
    readonly endDate: InputMaybe<SANITY_StringFilter>;
    readonly image: InputMaybe<SANITY_ImageFilter>;
    readonly name: InputMaybe<SANITY_StringFilter>;
    readonly startDate: InputMaybe<SANITY_StringFilter>;
  };

  type SANITY_JobSorting = {
    readonly _createdAt: InputMaybe<SANITY_SortOrder>;
    readonly _id: InputMaybe<SANITY_SortOrder>;
    readonly _key: InputMaybe<SANITY_SortOrder>;
    readonly _rev: InputMaybe<SANITY_SortOrder>;
    readonly _type: InputMaybe<SANITY_SortOrder>;
    readonly _updatedAt: InputMaybe<SANITY_SortOrder>;
    readonly content: InputMaybe<SANITY_SortOrder>;
    readonly description: InputMaybe<SANITY_SortOrder>;
    readonly employType: InputMaybe<SANITY_SortOrder>;
    readonly endDate: InputMaybe<SANITY_SortOrder>;
    readonly image: InputMaybe<SANITY_ImageSorting>;
    readonly name: InputMaybe<SANITY_SortOrder>;
    readonly startDate: InputMaybe<SANITY_SortOrder>;
  };

  type SANITY_Post = SANITY_Document & {
    /** Date the document was created */
    readonly _createdAt: Maybe<Scalars["SANITY_DateTime"]>;
    /** Document ID */
    readonly _id: Maybe<Scalars["ID"]>;
    readonly _key: Maybe<Scalars["String"]>;
    /** Current document revision */
    readonly _rev: Maybe<Scalars["String"]>;
    /** Document type */
    readonly _type: Maybe<Scalars["String"]>;
    /** Date the document was last modified */
    readonly _updatedAt: Maybe<Scalars["SANITY_DateTime"]>;
    /** Add your content in Markdown format */
    readonly content: Maybe<Scalars["String"]>;
    readonly description: Maybe<Scalars["String"]>;
    /** Enter the year and month (e.g., 2025-01) */
    readonly endDate: Maybe<Scalars["String"]>;
    readonly image: Maybe<SANITY_Image>;
    readonly slug: Maybe<SANITY_Slug>;
    /** Enter the year and month (e.g., 2025-01) */
    readonly startDate: Maybe<Scalars["String"]>;
    readonly title: Maybe<Scalars["String"]>;
  };

  type SANITY_PostFilter = {
    /** Apply filters on document level */
    readonly _: InputMaybe<SANITY_Sanity_DocumentFilter>;
    readonly _createdAt: InputMaybe<SANITY_DatetimeFilter>;
    readonly _id: InputMaybe<SANITY_IDFilter>;
    readonly _key: InputMaybe<SANITY_StringFilter>;
    readonly _rev: InputMaybe<SANITY_StringFilter>;
    readonly _type: InputMaybe<SANITY_StringFilter>;
    readonly _updatedAt: InputMaybe<SANITY_DatetimeFilter>;
    readonly content: InputMaybe<SANITY_StringFilter>;
    readonly description: InputMaybe<SANITY_StringFilter>;
    readonly endDate: InputMaybe<SANITY_StringFilter>;
    readonly image: InputMaybe<SANITY_ImageFilter>;
    readonly slug: InputMaybe<SANITY_SlugFilter>;
    readonly startDate: InputMaybe<SANITY_StringFilter>;
    readonly title: InputMaybe<SANITY_StringFilter>;
  };

  type SANITY_PostSorting = {
    readonly _createdAt: InputMaybe<SANITY_SortOrder>;
    readonly _id: InputMaybe<SANITY_SortOrder>;
    readonly _key: InputMaybe<SANITY_SortOrder>;
    readonly _rev: InputMaybe<SANITY_SortOrder>;
    readonly _type: InputMaybe<SANITY_SortOrder>;
    readonly _updatedAt: InputMaybe<SANITY_SortOrder>;
    readonly content: InputMaybe<SANITY_SortOrder>;
    readonly description: InputMaybe<SANITY_SortOrder>;
    readonly endDate: InputMaybe<SANITY_SortOrder>;
    readonly image: InputMaybe<SANITY_ImageSorting>;
    readonly slug: InputMaybe<SANITY_SlugSorting>;
    readonly startDate: InputMaybe<SANITY_SortOrder>;
    readonly title: InputMaybe<SANITY_SortOrder>;
  };

  type SANITY_SanityAssetSourceData = {
    readonly _key: Maybe<Scalars["String"]>;
    readonly _type: Maybe<Scalars["String"]>;
    /** The unique ID for the asset within the originating source so you can programatically find back to it */
    readonly id: Maybe<Scalars["String"]>;
    /** A canonical name for the source this asset is originating from */
    readonly name: Maybe<Scalars["String"]>;
    /** A URL to find more information about this asset in the originating source */
    readonly url: Maybe<Scalars["String"]>;
  };

  type SANITY_SanityAssetSourceDataFilter = {
    readonly _key: InputMaybe<SANITY_StringFilter>;
    readonly _type: InputMaybe<SANITY_StringFilter>;
    readonly id: InputMaybe<SANITY_StringFilter>;
    readonly name: InputMaybe<SANITY_StringFilter>;
    readonly url: InputMaybe<SANITY_StringFilter>;
  };

  type SANITY_SanityAssetSourceDataSorting = {
    readonly _key: InputMaybe<SANITY_SortOrder>;
    readonly _type: InputMaybe<SANITY_SortOrder>;
    readonly id: InputMaybe<SANITY_SortOrder>;
    readonly name: InputMaybe<SANITY_SortOrder>;
    readonly url: InputMaybe<SANITY_SortOrder>;
  };

  type SANITY_SanityFileAsset = SANITY_Document & {
    /** Date the document was created */
    readonly _createdAt: Maybe<Scalars["SANITY_DateTime"]>;
    /** Document ID */
    readonly _id: Maybe<Scalars["ID"]>;
    readonly _key: Maybe<Scalars["String"]>;
    /** Current document revision */
    readonly _rev: Maybe<Scalars["String"]>;
    /** Document type */
    readonly _type: Maybe<Scalars["String"]>;
    /** Date the document was last modified */
    readonly _updatedAt: Maybe<Scalars["SANITY_DateTime"]>;
    readonly altText: Maybe<Scalars["String"]>;
    readonly assetId: Maybe<Scalars["String"]>;
    readonly description: Maybe<Scalars["String"]>;
    readonly extension: Maybe<Scalars["String"]>;
    readonly label: Maybe<Scalars["String"]>;
    readonly mimeType: Maybe<Scalars["String"]>;
    readonly originalFilename: Maybe<Scalars["String"]>;
    readonly path: Maybe<Scalars["String"]>;
    readonly sha1hash: Maybe<Scalars["String"]>;
    readonly size: Maybe<Scalars["Float"]>;
    readonly source: Maybe<SANITY_SanityAssetSourceData>;
    readonly title: Maybe<Scalars["String"]>;
    readonly uploadId: Maybe<Scalars["String"]>;
    readonly url: Maybe<Scalars["String"]>;
  };

  type SANITY_SanityFileAssetFilter = {
    /** Apply filters on document level */
    readonly _: InputMaybe<SANITY_Sanity_DocumentFilter>;
    readonly _createdAt: InputMaybe<SANITY_DatetimeFilter>;
    readonly _id: InputMaybe<SANITY_IDFilter>;
    readonly _key: InputMaybe<SANITY_StringFilter>;
    readonly _rev: InputMaybe<SANITY_StringFilter>;
    readonly _type: InputMaybe<SANITY_StringFilter>;
    readonly _updatedAt: InputMaybe<SANITY_DatetimeFilter>;
    readonly altText: InputMaybe<SANITY_StringFilter>;
    readonly assetId: InputMaybe<SANITY_StringFilter>;
    readonly description: InputMaybe<SANITY_StringFilter>;
    readonly extension: InputMaybe<SANITY_StringFilter>;
    readonly label: InputMaybe<SANITY_StringFilter>;
    readonly mimeType: InputMaybe<SANITY_StringFilter>;
    readonly originalFilename: InputMaybe<SANITY_StringFilter>;
    readonly path: InputMaybe<SANITY_StringFilter>;
    readonly sha1hash: InputMaybe<SANITY_StringFilter>;
    readonly size: InputMaybe<SANITY_FloatFilter>;
    readonly source: InputMaybe<SANITY_SanityAssetSourceDataFilter>;
    readonly title: InputMaybe<SANITY_StringFilter>;
    readonly uploadId: InputMaybe<SANITY_StringFilter>;
    readonly url: InputMaybe<SANITY_StringFilter>;
  };

  type SANITY_SanityFileAssetSorting = {
    readonly _createdAt: InputMaybe<SANITY_SortOrder>;
    readonly _id: InputMaybe<SANITY_SortOrder>;
    readonly _key: InputMaybe<SANITY_SortOrder>;
    readonly _rev: InputMaybe<SANITY_SortOrder>;
    readonly _type: InputMaybe<SANITY_SortOrder>;
    readonly _updatedAt: InputMaybe<SANITY_SortOrder>;
    readonly altText: InputMaybe<SANITY_SortOrder>;
    readonly assetId: InputMaybe<SANITY_SortOrder>;
    readonly description: InputMaybe<SANITY_SortOrder>;
    readonly extension: InputMaybe<SANITY_SortOrder>;
    readonly label: InputMaybe<SANITY_SortOrder>;
    readonly mimeType: InputMaybe<SANITY_SortOrder>;
    readonly originalFilename: InputMaybe<SANITY_SortOrder>;
    readonly path: InputMaybe<SANITY_SortOrder>;
    readonly sha1hash: InputMaybe<SANITY_SortOrder>;
    readonly size: InputMaybe<SANITY_SortOrder>;
    readonly source: InputMaybe<SANITY_SanityAssetSourceDataSorting>;
    readonly title: InputMaybe<SANITY_SortOrder>;
    readonly uploadId: InputMaybe<SANITY_SortOrder>;
    readonly url: InputMaybe<SANITY_SortOrder>;
  };

  type SANITY_SanityImageAsset = SANITY_Document & {
    /** Date the document was created */
    readonly _createdAt: Maybe<Scalars["SANITY_DateTime"]>;
    /** Document ID */
    readonly _id: Maybe<Scalars["ID"]>;
    readonly _key: Maybe<Scalars["String"]>;
    /** Current document revision */
    readonly _rev: Maybe<Scalars["String"]>;
    /** Document type */
    readonly _type: Maybe<Scalars["String"]>;
    /** Date the document was last modified */
    readonly _updatedAt: Maybe<Scalars["SANITY_DateTime"]>;
    readonly altText: Maybe<Scalars["String"]>;
    readonly assetId: Maybe<Scalars["String"]>;
    readonly description: Maybe<Scalars["String"]>;
    readonly extension: Maybe<Scalars["String"]>;
    readonly label: Maybe<Scalars["String"]>;
    readonly metadata: Maybe<SANITY_SanityImageMetadata>;
    readonly mimeType: Maybe<Scalars["String"]>;
    readonly originalFilename: Maybe<Scalars["String"]>;
    readonly path: Maybe<Scalars["String"]>;
    readonly sha1hash: Maybe<Scalars["String"]>;
    readonly size: Maybe<Scalars["Float"]>;
    readonly source: Maybe<SANITY_SanityAssetSourceData>;
    readonly title: Maybe<Scalars["String"]>;
    readonly uploadId: Maybe<Scalars["String"]>;
    readonly url: Maybe<Scalars["String"]>;
  };

  type SANITY_SanityImageAssetFilter = {
    /** Apply filters on document level */
    readonly _: InputMaybe<SANITY_Sanity_DocumentFilter>;
    readonly _createdAt: InputMaybe<SANITY_DatetimeFilter>;
    readonly _id: InputMaybe<SANITY_IDFilter>;
    readonly _key: InputMaybe<SANITY_StringFilter>;
    readonly _rev: InputMaybe<SANITY_StringFilter>;
    readonly _type: InputMaybe<SANITY_StringFilter>;
    readonly _updatedAt: InputMaybe<SANITY_DatetimeFilter>;
    readonly altText: InputMaybe<SANITY_StringFilter>;
    readonly assetId: InputMaybe<SANITY_StringFilter>;
    readonly description: InputMaybe<SANITY_StringFilter>;
    readonly extension: InputMaybe<SANITY_StringFilter>;
    readonly label: InputMaybe<SANITY_StringFilter>;
    readonly metadata: InputMaybe<SANITY_SanityImageMetadataFilter>;
    readonly mimeType: InputMaybe<SANITY_StringFilter>;
    readonly originalFilename: InputMaybe<SANITY_StringFilter>;
    readonly path: InputMaybe<SANITY_StringFilter>;
    readonly sha1hash: InputMaybe<SANITY_StringFilter>;
    readonly size: InputMaybe<SANITY_FloatFilter>;
    readonly source: InputMaybe<SANITY_SanityAssetSourceDataFilter>;
    readonly title: InputMaybe<SANITY_StringFilter>;
    readonly uploadId: InputMaybe<SANITY_StringFilter>;
    readonly url: InputMaybe<SANITY_StringFilter>;
  };

  type SANITY_SanityImageAssetSorting = {
    readonly _createdAt: InputMaybe<SANITY_SortOrder>;
    readonly _id: InputMaybe<SANITY_SortOrder>;
    readonly _key: InputMaybe<SANITY_SortOrder>;
    readonly _rev: InputMaybe<SANITY_SortOrder>;
    readonly _type: InputMaybe<SANITY_SortOrder>;
    readonly _updatedAt: InputMaybe<SANITY_SortOrder>;
    readonly altText: InputMaybe<SANITY_SortOrder>;
    readonly assetId: InputMaybe<SANITY_SortOrder>;
    readonly description: InputMaybe<SANITY_SortOrder>;
    readonly extension: InputMaybe<SANITY_SortOrder>;
    readonly label: InputMaybe<SANITY_SortOrder>;
    readonly metadata: InputMaybe<SANITY_SanityImageMetadataSorting>;
    readonly mimeType: InputMaybe<SANITY_SortOrder>;
    readonly originalFilename: InputMaybe<SANITY_SortOrder>;
    readonly path: InputMaybe<SANITY_SortOrder>;
    readonly sha1hash: InputMaybe<SANITY_SortOrder>;
    readonly size: InputMaybe<SANITY_SortOrder>;
    readonly source: InputMaybe<SANITY_SanityAssetSourceDataSorting>;
    readonly title: InputMaybe<SANITY_SortOrder>;
    readonly uploadId: InputMaybe<SANITY_SortOrder>;
    readonly url: InputMaybe<SANITY_SortOrder>;
  };

  type SANITY_SanityImageCrop = {
    readonly _key: Maybe<Scalars["String"]>;
    readonly _type: Maybe<Scalars["String"]>;
    readonly bottom: Maybe<Scalars["Float"]>;
    readonly left: Maybe<Scalars["Float"]>;
    readonly right: Maybe<Scalars["Float"]>;
    readonly top: Maybe<Scalars["Float"]>;
  };

  type SANITY_SanityImageCropFilter = {
    readonly _key: InputMaybe<SANITY_StringFilter>;
    readonly _type: InputMaybe<SANITY_StringFilter>;
    readonly bottom: InputMaybe<SANITY_FloatFilter>;
    readonly left: InputMaybe<SANITY_FloatFilter>;
    readonly right: InputMaybe<SANITY_FloatFilter>;
    readonly top: InputMaybe<SANITY_FloatFilter>;
  };

  type SANITY_SanityImageCropSorting = {
    readonly _key: InputMaybe<SANITY_SortOrder>;
    readonly _type: InputMaybe<SANITY_SortOrder>;
    readonly bottom: InputMaybe<SANITY_SortOrder>;
    readonly left: InputMaybe<SANITY_SortOrder>;
    readonly right: InputMaybe<SANITY_SortOrder>;
    readonly top: InputMaybe<SANITY_SortOrder>;
  };

  type SANITY_SanityImageDimensions = {
    readonly _key: Maybe<Scalars["String"]>;
    readonly _type: Maybe<Scalars["String"]>;
    readonly aspectRatio: Maybe<Scalars["Float"]>;
    readonly height: Maybe<Scalars["Float"]>;
    readonly width: Maybe<Scalars["Float"]>;
  };

  type SANITY_SanityImageDimensionsFilter = {
    readonly _key: InputMaybe<SANITY_StringFilter>;
    readonly _type: InputMaybe<SANITY_StringFilter>;
    readonly aspectRatio: InputMaybe<SANITY_FloatFilter>;
    readonly height: InputMaybe<SANITY_FloatFilter>;
    readonly width: InputMaybe<SANITY_FloatFilter>;
  };

  type SANITY_SanityImageDimensionsSorting = {
    readonly _key: InputMaybe<SANITY_SortOrder>;
    readonly _type: InputMaybe<SANITY_SortOrder>;
    readonly aspectRatio: InputMaybe<SANITY_SortOrder>;
    readonly height: InputMaybe<SANITY_SortOrder>;
    readonly width: InputMaybe<SANITY_SortOrder>;
  };

  type SANITY_SanityImageHotspot = {
    readonly _key: Maybe<Scalars["String"]>;
    readonly _type: Maybe<Scalars["String"]>;
    readonly height: Maybe<Scalars["Float"]>;
    readonly width: Maybe<Scalars["Float"]>;
    readonly x: Maybe<Scalars["Float"]>;
    readonly y: Maybe<Scalars["Float"]>;
  };

  type SANITY_SanityImageHotspotFilter = {
    readonly _key: InputMaybe<SANITY_StringFilter>;
    readonly _type: InputMaybe<SANITY_StringFilter>;
    readonly height: InputMaybe<SANITY_FloatFilter>;
    readonly width: InputMaybe<SANITY_FloatFilter>;
    readonly x: InputMaybe<SANITY_FloatFilter>;
    readonly y: InputMaybe<SANITY_FloatFilter>;
  };

  type SANITY_SanityImageHotspotSorting = {
    readonly _key: InputMaybe<SANITY_SortOrder>;
    readonly _type: InputMaybe<SANITY_SortOrder>;
    readonly height: InputMaybe<SANITY_SortOrder>;
    readonly width: InputMaybe<SANITY_SortOrder>;
    readonly x: InputMaybe<SANITY_SortOrder>;
    readonly y: InputMaybe<SANITY_SortOrder>;
  };

  type SANITY_SanityImageMetadata = {
    readonly _key: Maybe<Scalars["String"]>;
    readonly _type: Maybe<Scalars["String"]>;
    readonly blurHash: Maybe<Scalars["String"]>;
    readonly dimensions: Maybe<SANITY_SanityImageDimensions>;
    readonly hasAlpha: Maybe<Scalars["Boolean"]>;
    readonly isOpaque: Maybe<Scalars["Boolean"]>;
    readonly location: Maybe<SANITY_Geopoint>;
    readonly lqip: Maybe<Scalars["String"]>;
    readonly palette: Maybe<SANITY_SanityImagePalette>;
  };

  type SANITY_SanityImageMetadataFilter = {
    readonly _key: InputMaybe<SANITY_StringFilter>;
    readonly _type: InputMaybe<SANITY_StringFilter>;
    readonly blurHash: InputMaybe<SANITY_StringFilter>;
    readonly dimensions: InputMaybe<SANITY_SanityImageDimensionsFilter>;
    readonly hasAlpha: InputMaybe<SANITY_BooleanFilter>;
    readonly isOpaque: InputMaybe<SANITY_BooleanFilter>;
    readonly location: InputMaybe<SANITY_GeopointFilter>;
    readonly lqip: InputMaybe<SANITY_StringFilter>;
    readonly palette: InputMaybe<SANITY_SanityImagePaletteFilter>;
  };

  type SANITY_SanityImageMetadataSorting = {
    readonly _key: InputMaybe<SANITY_SortOrder>;
    readonly _type: InputMaybe<SANITY_SortOrder>;
    readonly blurHash: InputMaybe<SANITY_SortOrder>;
    readonly dimensions: InputMaybe<SANITY_SanityImageDimensionsSorting>;
    readonly hasAlpha: InputMaybe<SANITY_SortOrder>;
    readonly isOpaque: InputMaybe<SANITY_SortOrder>;
    readonly location: InputMaybe<SANITY_GeopointSorting>;
    readonly lqip: InputMaybe<SANITY_SortOrder>;
    readonly palette: InputMaybe<SANITY_SanityImagePaletteSorting>;
  };

  type SANITY_SanityImagePalette = {
    readonly _key: Maybe<Scalars["String"]>;
    readonly _type: Maybe<Scalars["String"]>;
    readonly darkMuted: Maybe<SANITY_SanityImagePaletteSwatch>;
    readonly darkVibrant: Maybe<SANITY_SanityImagePaletteSwatch>;
    readonly dominant: Maybe<SANITY_SanityImagePaletteSwatch>;
    readonly lightMuted: Maybe<SANITY_SanityImagePaletteSwatch>;
    readonly lightVibrant: Maybe<SANITY_SanityImagePaletteSwatch>;
    readonly muted: Maybe<SANITY_SanityImagePaletteSwatch>;
    readonly vibrant: Maybe<SANITY_SanityImagePaletteSwatch>;
  };

  type SANITY_SanityImagePaletteFilter = {
    readonly _key: InputMaybe<SANITY_StringFilter>;
    readonly _type: InputMaybe<SANITY_StringFilter>;
    readonly darkMuted: InputMaybe<SANITY_SanityImagePaletteSwatchFilter>;
    readonly darkVibrant: InputMaybe<SANITY_SanityImagePaletteSwatchFilter>;
    readonly dominant: InputMaybe<SANITY_SanityImagePaletteSwatchFilter>;
    readonly lightMuted: InputMaybe<SANITY_SanityImagePaletteSwatchFilter>;
    readonly lightVibrant: InputMaybe<SANITY_SanityImagePaletteSwatchFilter>;
    readonly muted: InputMaybe<SANITY_SanityImagePaletteSwatchFilter>;
    readonly vibrant: InputMaybe<SANITY_SanityImagePaletteSwatchFilter>;
  };

  type SANITY_SanityImagePaletteSorting = {
    readonly _key: InputMaybe<SANITY_SortOrder>;
    readonly _type: InputMaybe<SANITY_SortOrder>;
    readonly darkMuted: InputMaybe<SANITY_SanityImagePaletteSwatchSorting>;
    readonly darkVibrant: InputMaybe<SANITY_SanityImagePaletteSwatchSorting>;
    readonly dominant: InputMaybe<SANITY_SanityImagePaletteSwatchSorting>;
    readonly lightMuted: InputMaybe<SANITY_SanityImagePaletteSwatchSorting>;
    readonly lightVibrant: InputMaybe<SANITY_SanityImagePaletteSwatchSorting>;
    readonly muted: InputMaybe<SANITY_SanityImagePaletteSwatchSorting>;
    readonly vibrant: InputMaybe<SANITY_SanityImagePaletteSwatchSorting>;
  };

  type SANITY_SanityImagePaletteSwatch = {
    readonly _key: Maybe<Scalars["String"]>;
    readonly _type: Maybe<Scalars["String"]>;
    readonly background: Maybe<Scalars["String"]>;
    readonly foreground: Maybe<Scalars["String"]>;
    readonly population: Maybe<Scalars["Float"]>;
    readonly title: Maybe<Scalars["String"]>;
  };

  type SANITY_SanityImagePaletteSwatchFilter = {
    readonly _key: InputMaybe<SANITY_StringFilter>;
    readonly _type: InputMaybe<SANITY_StringFilter>;
    readonly background: InputMaybe<SANITY_StringFilter>;
    readonly foreground: InputMaybe<SANITY_StringFilter>;
    readonly population: InputMaybe<SANITY_FloatFilter>;
    readonly title: InputMaybe<SANITY_StringFilter>;
  };

  type SANITY_SanityImagePaletteSwatchSorting = {
    readonly _key: InputMaybe<SANITY_SortOrder>;
    readonly _type: InputMaybe<SANITY_SortOrder>;
    readonly background: InputMaybe<SANITY_SortOrder>;
    readonly foreground: InputMaybe<SANITY_SortOrder>;
    readonly population: InputMaybe<SANITY_SortOrder>;
    readonly title: InputMaybe<SANITY_SortOrder>;
  };

  type SANITY_Sanity_DocumentFilter = {
    /** All documents that are drafts. */
    readonly is_draft: InputMaybe<Scalars["Boolean"]>;
    /** All documents referencing the given document ID. */
    readonly references: InputMaybe<Scalars["ID"]>;
  };

  type SANITY_Slug = {
    readonly _key: Maybe<Scalars["String"]>;
    readonly _type: Maybe<Scalars["String"]>;
    readonly current: Maybe<Scalars["String"]>;
    readonly source: Maybe<Scalars["String"]>;
  };

  type SANITY_SlugFilter = {
    readonly _key: InputMaybe<SANITY_StringFilter>;
    readonly _type: InputMaybe<SANITY_StringFilter>;
    readonly current: InputMaybe<SANITY_StringFilter>;
    readonly source: InputMaybe<SANITY_StringFilter>;
  };

  type SANITY_SlugSorting = {
    readonly _key: InputMaybe<SANITY_SortOrder>;
    readonly _type: InputMaybe<SANITY_SortOrder>;
    readonly current: InputMaybe<SANITY_SortOrder>;
    readonly source: InputMaybe<SANITY_SortOrder>;
  };

  type SANITY_SortOrder =
    /** Sorts on the value in ascending order. */
    | "ASC"
    /** Sorts on the value in descending order. */
    | "DESC";

  type SANITY_Span = {
    readonly _key: Maybe<Scalars["String"]>;
    readonly _type: Maybe<Scalars["String"]>;
    readonly marks: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
    readonly text: Maybe<Scalars["String"]>;
  };

  type SANITY_StringFilter = {
    /** Checks if the value is equal to the given input. */
    readonly eq: InputMaybe<Scalars["String"]>;
    readonly in: InputMaybe<ReadonlyArray<Scalars["String"]>>;
    /** Checks if the value is defined. */
    readonly is_defined: InputMaybe<Scalars["Boolean"]>;
    /** Checks if the value matches the given word/words. */
    readonly matches: InputMaybe<Scalars["String"]>;
    /** Checks if the value is not equal to the given input. */
    readonly neq: InputMaybe<Scalars["String"]>;
    readonly nin: InputMaybe<ReadonlyArray<Scalars["String"]>>;
  };

  type Site = Node & {
    readonly buildTime: Maybe<Scalars["Date"]>;
    readonly children: ReadonlyArray<Node>;
    readonly graphqlTypegen: Maybe<SiteGraphqlTypegen>;
    readonly id: Scalars["ID"];
    readonly internal: Internal;
    readonly jsxRuntime: Maybe<Scalars["String"]>;
    readonly parent: Maybe<Node>;
    readonly pathPrefix: Maybe<Scalars["String"]>;
    readonly polyfill: Maybe<Scalars["Boolean"]>;
    readonly siteMetadata: Maybe<SiteSiteMetadata>;
    readonly trailingSlash: Maybe<Scalars["String"]>;
  };

  type Site_buildTimeArgs = {
    difference: InputMaybe<Scalars["String"]>;
    formatString: InputMaybe<Scalars["String"]>;
    fromNow: InputMaybe<Scalars["Boolean"]>;
    locale: InputMaybe<Scalars["String"]>;
  };

  type SiteBuildMetadata = Node & {
    readonly buildTime: Maybe<Scalars["Date"]>;
    readonly children: ReadonlyArray<Node>;
    readonly id: Scalars["ID"];
    readonly internal: Internal;
    readonly parent: Maybe<Node>;
  };

  type SiteBuildMetadata_buildTimeArgs = {
    difference: InputMaybe<Scalars["String"]>;
    formatString: InputMaybe<Scalars["String"]>;
    fromNow: InputMaybe<Scalars["Boolean"]>;
    locale: InputMaybe<Scalars["String"]>;
  };

  type SiteBuildMetadataConnection = {
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
    readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly nodes: ReadonlyArray<SiteBuildMetadata>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly totalCount: Scalars["Int"];
  };

  type SiteBuildMetadataConnection_distinctArgs = {
    field: SiteBuildMetadataFieldSelector;
  };

  type SiteBuildMetadataConnection_groupArgs = {
    field: SiteBuildMetadataFieldSelector;
    limit: InputMaybe<Scalars["Int"]>;
    skip: InputMaybe<Scalars["Int"]>;
  };

  type SiteBuildMetadataConnection_maxArgs = {
    field: SiteBuildMetadataFieldSelector;
  };

  type SiteBuildMetadataConnection_minArgs = {
    field: SiteBuildMetadataFieldSelector;
  };

  type SiteBuildMetadataConnection_sumArgs = {
    field: SiteBuildMetadataFieldSelector;
  };

  type SiteBuildMetadataEdge = {
    readonly next: Maybe<SiteBuildMetadata>;
    readonly node: SiteBuildMetadata;
    readonly previous: Maybe<SiteBuildMetadata>;
  };

  type SiteBuildMetadataFieldSelector = {
    readonly buildTime: InputMaybe<FieldSelectorEnum>;
    readonly children: InputMaybe<NodeFieldSelector>;
    readonly id: InputMaybe<FieldSelectorEnum>;
    readonly internal: InputMaybe<InternalFieldSelector>;
    readonly parent: InputMaybe<NodeFieldSelector>;
  };

  type SiteBuildMetadataFilterInput = {
    readonly buildTime: InputMaybe<DateQueryOperatorInput>;
    readonly children: InputMaybe<NodeFilterListInput>;
    readonly id: InputMaybe<StringQueryOperatorInput>;
    readonly internal: InputMaybe<InternalFilterInput>;
    readonly parent: InputMaybe<NodeFilterInput>;
  };

  type SiteBuildMetadataGroupConnection = {
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
    readonly field: Scalars["String"];
    readonly fieldValue: Maybe<Scalars["String"]>;
    readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly nodes: ReadonlyArray<SiteBuildMetadata>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly totalCount: Scalars["Int"];
  };

  type SiteBuildMetadataGroupConnection_distinctArgs = {
    field: SiteBuildMetadataFieldSelector;
  };

  type SiteBuildMetadataGroupConnection_groupArgs = {
    field: SiteBuildMetadataFieldSelector;
    limit: InputMaybe<Scalars["Int"]>;
    skip: InputMaybe<Scalars["Int"]>;
  };

  type SiteBuildMetadataGroupConnection_maxArgs = {
    field: SiteBuildMetadataFieldSelector;
  };

  type SiteBuildMetadataGroupConnection_minArgs = {
    field: SiteBuildMetadataFieldSelector;
  };

  type SiteBuildMetadataGroupConnection_sumArgs = {
    field: SiteBuildMetadataFieldSelector;
  };

  type SiteBuildMetadataSortInput = {
    readonly buildTime: InputMaybe<SortOrderEnum>;
    readonly children: InputMaybe<NodeSortInput>;
    readonly id: InputMaybe<SortOrderEnum>;
    readonly internal: InputMaybe<InternalSortInput>;
    readonly parent: InputMaybe<NodeSortInput>;
  };

  type SiteConnection = {
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly edges: ReadonlyArray<SiteEdge>;
    readonly group: ReadonlyArray<SiteGroupConnection>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly nodes: ReadonlyArray<Site>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly totalCount: Scalars["Int"];
  };

  type SiteConnection_distinctArgs = {
    field: SiteFieldSelector;
  };

  type SiteConnection_groupArgs = {
    field: SiteFieldSelector;
    limit: InputMaybe<Scalars["Int"]>;
    skip: InputMaybe<Scalars["Int"]>;
  };

  type SiteConnection_maxArgs = {
    field: SiteFieldSelector;
  };

  type SiteConnection_minArgs = {
    field: SiteFieldSelector;
  };

  type SiteConnection_sumArgs = {
    field: SiteFieldSelector;
  };

  type SiteEdge = {
    readonly next: Maybe<Site>;
    readonly node: Site;
    readonly previous: Maybe<Site>;
  };

  type SiteFieldSelector = {
    readonly buildTime: InputMaybe<FieldSelectorEnum>;
    readonly children: InputMaybe<NodeFieldSelector>;
    readonly graphqlTypegen: InputMaybe<SiteGraphqlTypegenFieldSelector>;
    readonly host: InputMaybe<FieldSelectorEnum>;
    readonly id: InputMaybe<FieldSelectorEnum>;
    readonly internal: InputMaybe<InternalFieldSelector>;
    readonly jsxRuntime: InputMaybe<FieldSelectorEnum>;
    readonly parent: InputMaybe<NodeFieldSelector>;
    readonly pathPrefix: InputMaybe<FieldSelectorEnum>;
    readonly polyfill: InputMaybe<FieldSelectorEnum>;
    readonly port: InputMaybe<FieldSelectorEnum>;
    readonly siteMetadata: InputMaybe<SiteSiteMetadataFieldSelector>;
    readonly trailingSlash: InputMaybe<FieldSelectorEnum>;
  };

  type SiteFilterInput = {
    readonly buildTime: InputMaybe<DateQueryOperatorInput>;
    readonly children: InputMaybe<NodeFilterListInput>;
    readonly graphqlTypegen: InputMaybe<SiteGraphqlTypegenFilterInput>;
    readonly id: InputMaybe<StringQueryOperatorInput>;
    readonly internal: InputMaybe<InternalFilterInput>;
    readonly jsxRuntime: InputMaybe<StringQueryOperatorInput>;
    readonly parent: InputMaybe<NodeFilterInput>;
    readonly pathPrefix: InputMaybe<StringQueryOperatorInput>;
    readonly polyfill: InputMaybe<BooleanQueryOperatorInput>;
    readonly siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
    readonly trailingSlash: InputMaybe<StringQueryOperatorInput>;
  };

  type SiteFunction = Node & {
    readonly absoluteCompiledFilePath: Scalars["String"];
    readonly children: ReadonlyArray<Node>;
    readonly functionRoute: Scalars["String"];
    readonly id: Scalars["ID"];
    readonly internal: Internal;
    readonly matchPath: Maybe<Scalars["String"]>;
    readonly originalAbsoluteFilePath: Scalars["String"];
    readonly originalRelativeFilePath: Scalars["String"];
    readonly parent: Maybe<Node>;
    readonly pluginName: Scalars["String"];
    readonly relativeCompiledFilePath: Scalars["String"];
  };

  type SiteFunctionConnection = {
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly edges: ReadonlyArray<SiteFunctionEdge>;
    readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly nodes: ReadonlyArray<SiteFunction>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly totalCount: Scalars["Int"];
  };

  type SiteFunctionConnection_distinctArgs = {
    field: SiteFunctionFieldSelector;
  };

  type SiteFunctionConnection_groupArgs = {
    field: SiteFunctionFieldSelector;
    limit: InputMaybe<Scalars["Int"]>;
    skip: InputMaybe<Scalars["Int"]>;
  };

  type SiteFunctionConnection_maxArgs = {
    field: SiteFunctionFieldSelector;
  };

  type SiteFunctionConnection_minArgs = {
    field: SiteFunctionFieldSelector;
  };

  type SiteFunctionConnection_sumArgs = {
    field: SiteFunctionFieldSelector;
  };

  type SiteFunctionEdge = {
    readonly next: Maybe<SiteFunction>;
    readonly node: SiteFunction;
    readonly previous: Maybe<SiteFunction>;
  };

  type SiteFunctionFieldSelector = {
    readonly absoluteCompiledFilePath: InputMaybe<FieldSelectorEnum>;
    readonly children: InputMaybe<NodeFieldSelector>;
    readonly functionRoute: InputMaybe<FieldSelectorEnum>;
    readonly id: InputMaybe<FieldSelectorEnum>;
    readonly internal: InputMaybe<InternalFieldSelector>;
    readonly matchPath: InputMaybe<FieldSelectorEnum>;
    readonly originalAbsoluteFilePath: InputMaybe<FieldSelectorEnum>;
    readonly originalRelativeFilePath: InputMaybe<FieldSelectorEnum>;
    readonly parent: InputMaybe<NodeFieldSelector>;
    readonly pluginName: InputMaybe<FieldSelectorEnum>;
    readonly relativeCompiledFilePath: InputMaybe<FieldSelectorEnum>;
  };

  type SiteFunctionFilterInput = {
    readonly absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
    readonly children: InputMaybe<NodeFilterListInput>;
    readonly functionRoute: InputMaybe<StringQueryOperatorInput>;
    readonly id: InputMaybe<StringQueryOperatorInput>;
    readonly internal: InputMaybe<InternalFilterInput>;
    readonly matchPath: InputMaybe<StringQueryOperatorInput>;
    readonly originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
    readonly originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
    readonly parent: InputMaybe<NodeFilterInput>;
    readonly pluginName: InputMaybe<StringQueryOperatorInput>;
    readonly relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  };

  type SiteFunctionGroupConnection = {
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly edges: ReadonlyArray<SiteFunctionEdge>;
    readonly field: Scalars["String"];
    readonly fieldValue: Maybe<Scalars["String"]>;
    readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly nodes: ReadonlyArray<SiteFunction>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly totalCount: Scalars["Int"];
  };

  type SiteFunctionGroupConnection_distinctArgs = {
    field: SiteFunctionFieldSelector;
  };

  type SiteFunctionGroupConnection_groupArgs = {
    field: SiteFunctionFieldSelector;
    limit: InputMaybe<Scalars["Int"]>;
    skip: InputMaybe<Scalars["Int"]>;
  };

  type SiteFunctionGroupConnection_maxArgs = {
    field: SiteFunctionFieldSelector;
  };

  type SiteFunctionGroupConnection_minArgs = {
    field: SiteFunctionFieldSelector;
  };

  type SiteFunctionGroupConnection_sumArgs = {
    field: SiteFunctionFieldSelector;
  };

  type SiteFunctionSortInput = {
    readonly absoluteCompiledFilePath: InputMaybe<SortOrderEnum>;
    readonly children: InputMaybe<NodeSortInput>;
    readonly functionRoute: InputMaybe<SortOrderEnum>;
    readonly id: InputMaybe<SortOrderEnum>;
    readonly internal: InputMaybe<InternalSortInput>;
    readonly matchPath: InputMaybe<SortOrderEnum>;
    readonly originalAbsoluteFilePath: InputMaybe<SortOrderEnum>;
    readonly originalRelativeFilePath: InputMaybe<SortOrderEnum>;
    readonly parent: InputMaybe<NodeSortInput>;
    readonly pluginName: InputMaybe<SortOrderEnum>;
    readonly relativeCompiledFilePath: InputMaybe<SortOrderEnum>;
  };

  type SiteGraphqlTypegen = {
    readonly documentSearchPaths: Maybe<
      ReadonlyArray<Maybe<Scalars["String"]>>
    >;
    readonly generateOnBuild: Maybe<Scalars["Boolean"]>;
    readonly typesOutputPath: Maybe<Scalars["String"]>;
  };

  type SiteGraphqlTypegenFieldSelector = {
    readonly documentSearchPaths: InputMaybe<FieldSelectorEnum>;
    readonly generateOnBuild: InputMaybe<FieldSelectorEnum>;
    readonly typesOutputPath: InputMaybe<FieldSelectorEnum>;
  };

  type SiteGraphqlTypegenFilterInput = {
    readonly documentSearchPaths: InputMaybe<StringQueryOperatorInput>;
    readonly generateOnBuild: InputMaybe<BooleanQueryOperatorInput>;
    readonly typesOutputPath: InputMaybe<StringQueryOperatorInput>;
  };

  type SiteGraphqlTypegenSortInput = {
    readonly documentSearchPaths: InputMaybe<SortOrderEnum>;
    readonly generateOnBuild: InputMaybe<SortOrderEnum>;
    readonly typesOutputPath: InputMaybe<SortOrderEnum>;
  };

  type SiteGroupConnection = {
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly edges: ReadonlyArray<SiteEdge>;
    readonly field: Scalars["String"];
    readonly fieldValue: Maybe<Scalars["String"]>;
    readonly group: ReadonlyArray<SiteGroupConnection>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly nodes: ReadonlyArray<Site>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly totalCount: Scalars["Int"];
  };

  type SiteGroupConnection_distinctArgs = {
    field: SiteFieldSelector;
  };

  type SiteGroupConnection_groupArgs = {
    field: SiteFieldSelector;
    limit: InputMaybe<Scalars["Int"]>;
    skip: InputMaybe<Scalars["Int"]>;
  };

  type SiteGroupConnection_maxArgs = {
    field: SiteFieldSelector;
  };

  type SiteGroupConnection_minArgs = {
    field: SiteFieldSelector;
  };

  type SiteGroupConnection_sumArgs = {
    field: SiteFieldSelector;
  };

  type SitePage = Node & {
    readonly children: ReadonlyArray<Node>;
    readonly component: Scalars["String"];
    readonly componentChunkName: Scalars["String"];
    readonly id: Scalars["ID"];
    readonly internal: Internal;
    readonly internalComponentName: Scalars["String"];
    readonly matchPath: Maybe<Scalars["String"]>;
    readonly pageContext: Maybe<Scalars["JSON"]>;
    readonly parent: Maybe<Node>;
    readonly path: Scalars["String"];
    readonly pluginCreator: Maybe<SitePlugin>;
  };

  type SitePageConnection = {
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly edges: ReadonlyArray<SitePageEdge>;
    readonly group: ReadonlyArray<SitePageGroupConnection>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly nodes: ReadonlyArray<SitePage>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly totalCount: Scalars["Int"];
  };

  type SitePageConnection_distinctArgs = {
    field: SitePageFieldSelector;
  };

  type SitePageConnection_groupArgs = {
    field: SitePageFieldSelector;
    limit: InputMaybe<Scalars["Int"]>;
    skip: InputMaybe<Scalars["Int"]>;
  };

  type SitePageConnection_maxArgs = {
    field: SitePageFieldSelector;
  };

  type SitePageConnection_minArgs = {
    field: SitePageFieldSelector;
  };

  type SitePageConnection_sumArgs = {
    field: SitePageFieldSelector;
  };

  type SitePageEdge = {
    readonly next: Maybe<SitePage>;
    readonly node: SitePage;
    readonly previous: Maybe<SitePage>;
  };

  type SitePageFieldSelector = {
    readonly children: InputMaybe<NodeFieldSelector>;
    readonly component: InputMaybe<FieldSelectorEnum>;
    readonly componentChunkName: InputMaybe<FieldSelectorEnum>;
    readonly id: InputMaybe<FieldSelectorEnum>;
    readonly internal: InputMaybe<InternalFieldSelector>;
    readonly internalComponentName: InputMaybe<FieldSelectorEnum>;
    readonly matchPath: InputMaybe<FieldSelectorEnum>;
    readonly pageContext: InputMaybe<FieldSelectorEnum>;
    readonly parent: InputMaybe<NodeFieldSelector>;
    readonly path: InputMaybe<FieldSelectorEnum>;
    readonly pluginCreator: InputMaybe<SitePluginFieldSelector>;
  };

  type SitePageFilterInput = {
    readonly children: InputMaybe<NodeFilterListInput>;
    readonly component: InputMaybe<StringQueryOperatorInput>;
    readonly componentChunkName: InputMaybe<StringQueryOperatorInput>;
    readonly id: InputMaybe<StringQueryOperatorInput>;
    readonly internal: InputMaybe<InternalFilterInput>;
    readonly internalComponentName: InputMaybe<StringQueryOperatorInput>;
    readonly matchPath: InputMaybe<StringQueryOperatorInput>;
    readonly pageContext: InputMaybe<JSONQueryOperatorInput>;
    readonly parent: InputMaybe<NodeFilterInput>;
    readonly path: InputMaybe<StringQueryOperatorInput>;
    readonly pluginCreator: InputMaybe<SitePluginFilterInput>;
  };

  type SitePageGroupConnection = {
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly edges: ReadonlyArray<SitePageEdge>;
    readonly field: Scalars["String"];
    readonly fieldValue: Maybe<Scalars["String"]>;
    readonly group: ReadonlyArray<SitePageGroupConnection>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly nodes: ReadonlyArray<SitePage>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly totalCount: Scalars["Int"];
  };

  type SitePageGroupConnection_distinctArgs = {
    field: SitePageFieldSelector;
  };

  type SitePageGroupConnection_groupArgs = {
    field: SitePageFieldSelector;
    limit: InputMaybe<Scalars["Int"]>;
    skip: InputMaybe<Scalars["Int"]>;
  };

  type SitePageGroupConnection_maxArgs = {
    field: SitePageFieldSelector;
  };

  type SitePageGroupConnection_minArgs = {
    field: SitePageFieldSelector;
  };

  type SitePageGroupConnection_sumArgs = {
    field: SitePageFieldSelector;
  };

  type SitePageSortInput = {
    readonly children: InputMaybe<NodeSortInput>;
    readonly component: InputMaybe<SortOrderEnum>;
    readonly componentChunkName: InputMaybe<SortOrderEnum>;
    readonly id: InputMaybe<SortOrderEnum>;
    readonly internal: InputMaybe<InternalSortInput>;
    readonly internalComponentName: InputMaybe<SortOrderEnum>;
    readonly matchPath: InputMaybe<SortOrderEnum>;
    readonly pageContext: InputMaybe<SortOrderEnum>;
    readonly parent: InputMaybe<NodeSortInput>;
    readonly path: InputMaybe<SortOrderEnum>;
    readonly pluginCreator: InputMaybe<SitePluginSortInput>;
  };

  type SitePlugin = Node & {
    readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
    readonly children: ReadonlyArray<Node>;
    readonly id: Scalars["ID"];
    readonly internal: Internal;
    readonly name: Maybe<Scalars["String"]>;
    readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
    readonly packageJson: Maybe<Scalars["JSON"]>;
    readonly parent: Maybe<Node>;
    readonly pluginFilepath: Maybe<Scalars["String"]>;
    readonly pluginOptions: Maybe<Scalars["JSON"]>;
    readonly resolve: Maybe<Scalars["String"]>;
    readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
    readonly version: Maybe<Scalars["String"]>;
  };

  type SitePluginConnection = {
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly edges: ReadonlyArray<SitePluginEdge>;
    readonly group: ReadonlyArray<SitePluginGroupConnection>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly nodes: ReadonlyArray<SitePlugin>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly totalCount: Scalars["Int"];
  };

  type SitePluginConnection_distinctArgs = {
    field: SitePluginFieldSelector;
  };

  type SitePluginConnection_groupArgs = {
    field: SitePluginFieldSelector;
    limit: InputMaybe<Scalars["Int"]>;
    skip: InputMaybe<Scalars["Int"]>;
  };

  type SitePluginConnection_maxArgs = {
    field: SitePluginFieldSelector;
  };

  type SitePluginConnection_minArgs = {
    field: SitePluginFieldSelector;
  };

  type SitePluginConnection_sumArgs = {
    field: SitePluginFieldSelector;
  };

  type SitePluginEdge = {
    readonly next: Maybe<SitePlugin>;
    readonly node: SitePlugin;
    readonly previous: Maybe<SitePlugin>;
  };

  type SitePluginFieldSelector = {
    readonly browserAPIs: InputMaybe<FieldSelectorEnum>;
    readonly children: InputMaybe<NodeFieldSelector>;
    readonly id: InputMaybe<FieldSelectorEnum>;
    readonly internal: InputMaybe<InternalFieldSelector>;
    readonly name: InputMaybe<FieldSelectorEnum>;
    readonly nodeAPIs: InputMaybe<FieldSelectorEnum>;
    readonly packageJson: InputMaybe<FieldSelectorEnum>;
    readonly parent: InputMaybe<NodeFieldSelector>;
    readonly pluginFilepath: InputMaybe<FieldSelectorEnum>;
    readonly pluginOptions: InputMaybe<FieldSelectorEnum>;
    readonly resolve: InputMaybe<FieldSelectorEnum>;
    readonly ssrAPIs: InputMaybe<FieldSelectorEnum>;
    readonly version: InputMaybe<FieldSelectorEnum>;
  };

  type SitePluginFilterInput = {
    readonly browserAPIs: InputMaybe<StringQueryOperatorInput>;
    readonly children: InputMaybe<NodeFilterListInput>;
    readonly id: InputMaybe<StringQueryOperatorInput>;
    readonly internal: InputMaybe<InternalFilterInput>;
    readonly name: InputMaybe<StringQueryOperatorInput>;
    readonly nodeAPIs: InputMaybe<StringQueryOperatorInput>;
    readonly packageJson: InputMaybe<JSONQueryOperatorInput>;
    readonly parent: InputMaybe<NodeFilterInput>;
    readonly pluginFilepath: InputMaybe<StringQueryOperatorInput>;
    readonly pluginOptions: InputMaybe<JSONQueryOperatorInput>;
    readonly resolve: InputMaybe<StringQueryOperatorInput>;
    readonly ssrAPIs: InputMaybe<StringQueryOperatorInput>;
    readonly version: InputMaybe<StringQueryOperatorInput>;
  };

  type SitePluginGroupConnection = {
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly edges: ReadonlyArray<SitePluginEdge>;
    readonly field: Scalars["String"];
    readonly fieldValue: Maybe<Scalars["String"]>;
    readonly group: ReadonlyArray<SitePluginGroupConnection>;
    readonly max: Maybe<Scalars["Float"]>;
    readonly min: Maybe<Scalars["Float"]>;
    readonly nodes: ReadonlyArray<SitePlugin>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars["Float"]>;
    readonly totalCount: Scalars["Int"];
  };

  type SitePluginGroupConnection_distinctArgs = {
    field: SitePluginFieldSelector;
  };

  type SitePluginGroupConnection_groupArgs = {
    field: SitePluginFieldSelector;
    limit: InputMaybe<Scalars["Int"]>;
    skip: InputMaybe<Scalars["Int"]>;
  };

  type SitePluginGroupConnection_maxArgs = {
    field: SitePluginFieldSelector;
  };

  type SitePluginGroupConnection_minArgs = {
    field: SitePluginFieldSelector;
  };

  type SitePluginGroupConnection_sumArgs = {
    field: SitePluginFieldSelector;
  };

  type SitePluginSortInput = {
    readonly browserAPIs: InputMaybe<SortOrderEnum>;
    readonly children: InputMaybe<NodeSortInput>;
    readonly id: InputMaybe<SortOrderEnum>;
    readonly internal: InputMaybe<InternalSortInput>;
    readonly name: InputMaybe<SortOrderEnum>;
    readonly nodeAPIs: InputMaybe<SortOrderEnum>;
    readonly packageJson: InputMaybe<SortOrderEnum>;
    readonly parent: InputMaybe<NodeSortInput>;
    readonly pluginFilepath: InputMaybe<SortOrderEnum>;
    readonly pluginOptions: InputMaybe<SortOrderEnum>;
    readonly resolve: InputMaybe<SortOrderEnum>;
    readonly ssrAPIs: InputMaybe<SortOrderEnum>;
    readonly version: InputMaybe<SortOrderEnum>;
  };

  type SiteSiteMetadata = {
    readonly description: Maybe<Scalars["String"]>;
    readonly siteUrl: Maybe<Scalars["String"]>;
    readonly title: Maybe<Scalars["String"]>;
  };

  type SiteSiteMetadataFieldSelector = {
    readonly description: InputMaybe<FieldSelectorEnum>;
    readonly siteUrl: InputMaybe<FieldSelectorEnum>;
    readonly title: InputMaybe<FieldSelectorEnum>;
  };

  type SiteSiteMetadataFilterInput = {
    readonly description: InputMaybe<StringQueryOperatorInput>;
    readonly siteUrl: InputMaybe<StringQueryOperatorInput>;
    readonly title: InputMaybe<StringQueryOperatorInput>;
  };

  type SiteSiteMetadataSortInput = {
    readonly description: InputMaybe<SortOrderEnum>;
    readonly siteUrl: InputMaybe<SortOrderEnum>;
    readonly title: InputMaybe<SortOrderEnum>;
  };

  type SiteSortInput = {
    readonly buildTime: InputMaybe<SortOrderEnum>;
    readonly children: InputMaybe<NodeSortInput>;
    readonly graphqlTypegen: InputMaybe<SiteGraphqlTypegenSortInput>;
    readonly host: InputMaybe<SortOrderEnum>;
    readonly id: InputMaybe<SortOrderEnum>;
    readonly internal: InputMaybe<InternalSortInput>;
    readonly jsxRuntime: InputMaybe<SortOrderEnum>;
    readonly parent: InputMaybe<NodeSortInput>;
    readonly pathPrefix: InputMaybe<SortOrderEnum>;
    readonly polyfill: InputMaybe<SortOrderEnum>;
    readonly port: InputMaybe<SortOrderEnum>;
    readonly siteMetadata: InputMaybe<SiteSiteMetadataSortInput>;
    readonly trailingSlash: InputMaybe<SortOrderEnum>;
  };

  type SortOrderEnum = "ASC" | "DESC";

  type StringQueryOperatorInput = {
    readonly eq: InputMaybe<Scalars["String"]>;
    readonly glob: InputMaybe<Scalars["String"]>;
    readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]>>>;
    readonly ne: InputMaybe<Scalars["String"]>;
    readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]>>>;
    readonly regex: InputMaybe<Scalars["String"]>;
  };

  type TransformOptions = {
    readonly cropFocus: InputMaybe<ImageCropFocus>;
    readonly duotone: InputMaybe<DuotoneGradient>;
    readonly fit: InputMaybe<ImageFit>;
    readonly grayscale: InputMaybe<Scalars["Boolean"]>;
    readonly rotate: InputMaybe<Scalars["Int"]>;
    readonly trim: InputMaybe<Scalars["Float"]>;
  };

  type WebPOptions = {
    readonly quality: InputMaybe<Scalars["Int"]>;
  };

  type GetAllJobsQueryVariables = Exact<{ [key: string]: never }>;

  type GetAllJobsQuery = {
    readonly sanity: {
      readonly allJob: ReadonlyArray<{
        readonly name: string | null;
        readonly description: string | null;
        readonly employType: string | null;
        readonly startDate: string | null;
        readonly endDate: string | null;
        readonly content: string | null;
        readonly image: {
          readonly asset: { readonly url: string | null } | null;
        } | null;
      }>;
    };
  };

  type GetAllPostsQueryVariables = Exact<{ [key: string]: never }>;

  type GetAllPostsQuery = {
    readonly sanity: {
      readonly allPost: ReadonlyArray<{
        readonly title: string | null;
        readonly description: string | null;
        readonly startDate: string | null;
        readonly endDate: string | null;
        readonly slug: { readonly current: string | null } | null;
        readonly image: {
          readonly asset: { readonly url: string | null } | null;
        } | null;
      }>;
    };
  };
}
