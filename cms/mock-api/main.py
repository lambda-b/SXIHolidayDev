# 開発する上で、jsonを返してくれるサーバーを提供
# URLに応じて、jsonファイルの中身を返却する
from fastapi import FastAPI

def get_skeleton(skeleton_name):
    file_name = 'skeletons/' + skeleton_name + '.json'
    skeleton = ''
    with open(file_name) as f:
        skeleton = f.read()  
    return skeleton


app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/{skeleton_name}")
async def mock(skeleton_name):
    return get_skeleton(skeleton_name)
