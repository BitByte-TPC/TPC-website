import os, fnmatch
def findReplace(directory, find, replace, filePattern):
    for path, dirs, files in os.walk(os.path.abspath(directory)):
        for filename in fnmatch.filter(files, filePattern):
            filepath = os.path.join(path, filename)
            with open(filepath) as f:
                s = f.read()
            s = s.replace(find, replace)
            with open(filepath, "w") as f:
                f.write(s)


loc = os.path.join(os.getcwd(), "..", "src")
findReplace(
  loc,
  "src=\"/images", "src=\"/webix.iiitdmj.ac.in/images"
  ,"*.tsx"
)
findReplace(
  loc,
  "\"/images", "\"/webix.iiitdmj.ac.in/images"
  ,"*.ts"
)
findReplace(
  loc,
  "image=\"/images", "image=\"/webix.iiitdmj.ac.in/images"
  ,"*.tsx"
)
print("Done!")

