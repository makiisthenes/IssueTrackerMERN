# Server Start Up.

# Some OS and System libraries you could use.
import os, time
# from concurrent.futures import ThreadPoolExecutor
from multiprocessing import Pool
# import win32com.client as client
# import sys
# import win32com.shell.shell as shell
from pyngrok import ngrok


BASE_DIR = r"B:\Coding Projects\MERN Project\MERN Book"
API_PATH = os.path.join(BASE_DIR, 'api')
UI_PATH = os.path.join(BASE_DIR, 'ui')


def run_command(command_pair):
	path, command = command_pair
	comp_command = fr"cd {path} && {command}"
	os.system(comp_command)



import psutil
def checkIfProcessRunning(processName):
    '''
    Check if there is any running process that contains the given name processName.
    Obtained from: `https://thispointer.com/python-check-if-a-process-is-running-by-name-and-find-its-process-id-pid/`
    '''
    #Iterate over the all the running process
    for proc in psutil.process_iter():
        try:
            # Check if process name contains the given name string.
            if processName.lower() in proc.name().lower():
                return True
        except (psutil.NoSuchProcess, psutil.AccessDenied, psutil.ZombieProcess):
            pass
    return False;



'''
# Setting up thread pool executor.
executor = ThreadPoolExecutor(max_workers=4)
executor.submit(run_command(API_PATH, "npm run dev"))
executor.submit(run_command(UI_PATH, "npm run compile"))
executor.submit(run_command(UI_PATH, "npm run watch"))
executor.submit(run_command(UI_PATH, "npm run dev"))
'''
if __name__ == "__main__":

	if checkIfProcessRunning("mongod.exe"):
		print("MongoDB Service is running.")
		print("Please be await that all processes output to the same console and can be confusing.")
		time.sleep(2)
		with Pool(3) as processorPool:
			processorPool.map(run_command, [(API_PATH, "npm run dev"), (UI_PATH, "npm run watch"), (UI_PATH, "npm run dev")])
		print("All processes running")
	else:
		print("Please check that MongoDB process is running.")

	# Make ngrok tunnel and start link in browser.
	# http_tunnel = ngrok.connect()
